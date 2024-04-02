import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Injectable({
    providedIn: 'root'
})
export class AppRouteGuard  {

    constructor(
        private msalService: MsalService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.msalService.instance.getAllAccounts()[0]) {
            return true;
        }
        return false;
    }
}
