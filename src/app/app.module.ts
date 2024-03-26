import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { environment } from '../environment/environment';
import { AuthHeaderInterceptor } from './core/interceptors/auth-header-interceptor';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { NgxPubSubModule } from '@pscoped/ngx-pub-sub';
import { RouterOutlet } from '@angular/router';

const isIE = window.navigator.userAgent.indexOf('MSIE') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        RouterOutlet,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MsalModule.forRoot(new PublicClientApplication
            (
                {
                    auth: {
                        clientId: environment.clintId,
                        redirectUri: environment.redirectUri,
                        authority: `https://login.microsoftonline.com/${environment.tenantId}`
                    },
                    cache:
                    {
                        cacheLocation: 'localStorage',
                        storeAuthStateInCookie: isIE
                    }
                }
            ),
            {
                interactionType: InteractionType.Redirect,
                authRequest: {
                    scopes: ['user.read']
                }
            },
            {
                interactionType: InteractionType.Redirect,
                protectedResourceMap: new Map(
                    [
                        ['https://graph.microsoft.com/v1.0/me', ['user.Read']],
                        ['localhost', ['api://apiUri/api.scope']]
                    ]
                )
            }),
        SidebarModule,
        ButtonModule,
        ToastModule,
        NgxPubSubModule
    ],
    providers: [
        DialogService,
        DynamicDialogRef,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHeaderInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MsalInterceptor,
            multi: true
        },
        MsalGuard],
    bootstrap: [AppComponent, MsalRedirectComponent]

})

export class AppModule { }