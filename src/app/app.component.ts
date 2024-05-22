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


  // account = `[{"homeAccountId":"00000000-0000-0000-2373-8d053b9276c9.9188040d-6c67-4c5b-b112-36a304b66dad","environment":"login.windows.net","tenantId":"09795158-d437-4993-b8a4-de614fbac9e3","username":"aroramanu22@live.com","localAccountId":"ef88d222-88b0-4b7d-8b51-936711caa35a","name":"Manvi Arora","authorityType":"MSSTS","tenantProfiles":{},"idTokenClaims":{"aud":"33b0bc08-ff1b-46fd-b477-a23221ca2978","iss":"https://login.microsoftonline.com/09795158-d437-4993-b8a4-de614fbac9e3/v2.0","iat":1716198613,"nbf":1716198613,"exp":1716202513,"idp":"https://sts.windows.net/9188040d-6c67-4c5b-b112-36a304b66dad/","name":"Manvi Arora","nonce":"018f956c-bd65-7e4b-ba36-e9da510a0c00","oid":"ef88d222-88b0-4b7d-8b51-936711caa35a","preferred_username":"aroramanu22@live.com","rh":"0.ASsAWFF5CTfUk0m4pN5hT7rJ4wi8sDMb__1GtHeiMiHKKXjCAJc.","sub":"gZ2b60vopJ8suwj5qcHQQx51Ls_J8TUkF_C3gzDFAp0","tid":"09795158-d437-4993-b8a4-de614fbac9e3","uti":"5OeL_tGVxECGWJpw-piRAA","ver":"2.0"},"idToken":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCJ9.eyJhdWQiOiIzM2IwYmMwOC1mZjFiLTQ2ZmQtYjQ3Ny1hMjMyMjFjYTI5NzgiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMDk3OTUxNTgtZDQzNy00OTkzLWI4YTQtZGU2MTRmYmFjOWUzL3YyLjAiLCJpYXQiOjE3MTYxOTg2MTMsIm5iZiI6MTcxNjE5ODYxMywiZXhwIjoxNzE2MjAyNTEzLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQvIiwibmFtZSI6Ik1hbnZpIEFyb3JhIiwibm9uY2UiOiIwMThmOTU2Yy1iZDY1LTdlNGItYmEzNi1lOWRhNTEwYTBjMDAiLCJvaWQiOiJlZjg4ZDIyMi04OGIwLTRiN2QtOGI1MS05MzY3MTFjYWEzNWEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcm9yYW1hbnUyMkBsaXZlLmNvbSIsInJoIjoiMC5BU3NBV0ZGNUNUZlVrMG00cE41aFQ3cko0d2k4c0RNYl9fMUd0SGVpTWlIS0tYakNBSmMuIiwic3ViIjoiZ1oyYjYwdm9wSjhzdXdqNXFjSFFReDUxTHNfSjhUVWtGX0MzZ3pERkFwMCIsInRpZCI6IjA5Nzk1MTU4LWQ0MzctNDk5My1iOGE0LWRlNjE0ZmJhYzllMyIsInV0aSI6IjVPZUxfdEdWeEVDR1dKcHctcGlSQUEiLCJ2ZXIiOiIyLjAifQ.eVewPO6Z2_1j9zFTE2LQZgoLREcvNvxzRia4aB4ldGIQbQNXQ6dPT_ugW2f4ltNMaD5XI8myUp9XocQpjC0LFabpRZAyqWN_Hm9mqtYvx1CRDzDshFzDbQV7iws605h9YwWeJk30ywM4Te0Mxx4l8ndBDgNzvoeZV2QJM8GcvHbk2lfaq9W3LQgPlVk6nehg4Xw_TN8-4MLok1UwDyFPShUtOb7rqS1IqA8RSfHk-XDG_hIdcQ5KdGacjekwQOzw3F4tPGMhUzCkQUBJIo37GZbn2wlevnHKE8XIRPcS4q6mOVIAeamFHsbqRUgxKeai1EL0v7_j7u0fGcZx5TxARQ"}]`

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
            _this.storageProvider.setSessionStorageData(Constants.CurrentUser, JSON.stringify(account[0]))
            _this.storageProvider.setSessionStorageData(Constants.AccessToken, account[0]['idToken']);
            _this.pubsubService.publishEvent('loginAccount', account[0]);
          }
      }
    })

    this.pubsubService.subscribe('toastMessage', (data)=> {
      this.addToast(data)
    });

    // this.loginDisplay = true;
    // this.storageProvider.setSessionStorageData(Constants.CurrentUser, JSON.parse(this.account)[0])
    // this.storageProvider.setSessionStorageData(Constants.AccessToken, JSON.parse(this.account)[0]['idToken']);
    // this.pubsubService.publishEvent('loginAccount', JSON.parse(this.account)[0]);
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
