import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  MsalService,
  MsalBroadcastService,
  MSAL_GUARD_CONFIG,
  MsalGuardConfiguration,
} from '@azure/msal-angular';
import {
  AuthenticationResult,
  InteractionStatus,
  InteractionType,
  PopupRequest,
  RedirectRequest,
  EventMessage,
  EventType
} from '@azure/msal-browser';
import { Subject, Subscription } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Constants } from './core/constants/constants';
import { StorageProvider } from './core/http/storage-service';
import { NgxPubSubService } from '@pscoped/ngx-pub-sub';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'ip_v1';
  loginDisplay = false;

  private msalSubscription: Subscription = new Subscription;
  private readonly _destroying$ = new Subject<void>();

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private storageProvider: StorageProvider,
    private route: Router,
    private pubsubService: NgxPubSubService,
    private messageService: MessageService
  ) { }

  async ngOnInit() {
    await this.authService.instance.initialize();
    
    // this.isIframe = window !== window.parent && !window.opener;
    this.setLoginDisplay();
    // this.authService.instance.enableAccountStorageEvents(); // Optional - This will enable ACCOUNT_ADDED and ACCOUNT_REMOVED events emitted when a user logs in or out of another tab or window

    /**
     * You can subscribe to MSAL events as shown below. For more info,
     * visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/events.md
     */
    let _this = this;
    this.msalBroadcastService.inProgress$
      .pipe(
        filter(
          (status: InteractionStatus) => status === InteractionStatus.None
        ),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
        this.checkAndSetActiveAccount();
      });

    this.msalSubscription = this.msalBroadcastService.msalSubject$
    .pipe(
      filter((msalSubject: any)=>
        msalSubject.eventType == EventType.LOGIN_SUCCESS || 
        msalSubject.eventType == EventType.LOGIN_FAILURE || 
        msalSubject.eventType == EventType.ACQUIRE_TOKEN_FAILURE || 
        msalSubject.eventType == EventType.ACQUIRE_TOKEN_SUCCESS ||
        msalSubject.eventType == EventType.HANDLE_REDIRECT_END  
      ),
      takeUntil(this._destroying$))
      .subscribe({
        next: (msalSubject: any) => {
          let account = _this.authService.instance.getAllAccounts();
          if (account.length) {
            _this.setLoginDisplay();
            _this.checkAndSetActiveAccount();
            _this.storageProvider.setSessionStorageData(Constants.AccessToken, JSON.stringify(account))
            _this.pubsubService.publishEvent('loginAccount', account[0]);
          }
      }
    })

    this.pubsubService.subscribe('toastMessage', (data)=> {
      this.addToast(data)
    });
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  checkAndSetActiveAccount() {
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    let activeAccount = this.authService.instance.getActiveAccount();

    if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
      let accounts = this.authService.instance.getAllAccounts();
      // add your code for handling multiple accounts here
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }

  login() {
    setTimeout(() => {
      if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
        if (this.msalGuardConfig.authRequest) {
          this.authService.loginPopup({
            ...this.msalGuardConfig.authRequest,
          } as PopupRequest)
            .subscribe((response: AuthenticationResult) => {
              this.authService.instance.setActiveAccount(response.account);
            });
        } else {
          this.authService.loginPopup()
            .subscribe((response: AuthenticationResult) => {
              this.authService.instance.setActiveAccount(response.account);
            });
        }
      } else {
        if (this.msalGuardConfig.authRequest) {
          this.authService.loginRedirect({
            ...this.msalGuardConfig.authRequest,
          } as RedirectRequest);
        } else {
          this.authService.loginRedirect();
        }
      }
    })
  }

  logout() {
    // if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
    //   this.authService.logoutPopup({
    //     account: this.authService.instance.getActiveAccount(),
    //   });
    // } else {
    //   this.authService.logoutRedirect({
    //     account: this.authService.instance.getActiveAccount(),
    //   });
    // }
    // this.clearStorageData();
    this.authService.logout();
  }

  // unsubscribe to events when component is destroyed
  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
    this.msalSubscription.unsubscribe();
  }

  addToast(data: {severity: string, header: string, body: string}) {
    this.messageService.add({ severity: data.severity, summary: data.header, detail: data.body });
  }

}
