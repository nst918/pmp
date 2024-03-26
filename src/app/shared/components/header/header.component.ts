import { Component, ViewChildren, QueryList, ElementRef, NgZone, OnDestroy, Injector, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { NgxPubSubService } from '@pscoped/ngx-pub-sub';
import { CommonService } from '../../services/common.service';
import { rolePermission } from '../../../core/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userData: any;
  rolePermission= rolePermission;

  @Output() loginEvent = new EventEmitter<any>;
  @Output() logoutEvent = new EventEmitter<any>;

  router: Router;
  ngZone: NgZone;
  msalService: MsalService;
  msalBroadcastService: MsalBroadcastService;
  sidebarVisible1: boolean = false;

  constructor(
    private injector: Injector,
    private commonService: CommonService,
    private pubsubService: NgxPubSubService
  ) {
    this.router = this.injector.get<Router>(Router);
    this.ngZone = this.injector.get<NgZone>(NgZone);
    this.msalService = this.injector.get<MsalService>(MsalService);
    this.msalBroadcastService = this.injector.get<MsalBroadcastService>(MsalBroadcastService);

    this.pubsubService.subscribe('loginAccount', (account)=> {
      this.setLoginUserData(account);
    });
  }

  /**
   * method used to subscribe the event emitters and get the user data if user is login
   * @returns promise wether user choose ok or cancel for the confirmation dialog
  */
  ngOnInit() {
    let currentUser = this.msalService.instance.getAllAccounts();
    if (currentUser[0]) {
      console.log("currentUser[0] => ", currentUser[0])
      this.setLoginUserData(currentUser[0]);
    }
  }

  getRole() {
    return this.commonService.getRole();
  }

  /**
 * Function to fetch login user information and bind access menus if user is login
 * @param isLoggedIn Is login boolean value
 */
  setLoginUserData(account: any) {
    this.userData = account;
  }

  loginUser() {
    this.loginEvent.emit(Math.random());
  }

  logoutUser() {
    this.logoutEvent.emit(Math.random());
  }

  /**
  * Descp: Function clear the session storage data and remove login data
  * @returns clear session storage
  */
  clearStorageData() {
  }

}