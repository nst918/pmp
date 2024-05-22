
import { Injectable, NgZone } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse, HttpHeaders, HttpContextToken } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Constants } from '../constants/constants';
import { Messages } from '../messages/messages';
export const IGNORED_STATUSES = new HttpContextToken<number[]>(() => []);
declare var MiniProfiler: any;
@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor(
    private ngZone: NgZone
    ) {
  }
  errorDialogRef: any;

  /**
   * Hit every API with same accessToken
   * @param request 
   * @param next 
   * @returns 
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = sessionStorage.getItem(Constants.AccessToken);
    const ignoredStatuses = request.context.get(IGNORED_STATUSES);
    if (accessToken) {
      // merge the bearer token into the existing headers
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + accessToken,
        }
      });
    }

    return next.handle(request).pipe(tap({
      next: (response) => {
        this.interceptNext(response)
      },error: (error: HttpErrorResponse) => {
        if (ignoredStatuses?.includes(error.status)) {
          // rethrow error to be catched locally
          return throwError(() => error);
        }

        let errorMessage = '';
        if (error.status) {
          this.errorStatusAction(error);
        }
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(() => errorMessage);
      }}
    ));
  }

  interceptNext(response: any) {
    if (response instanceof HttpResponse) {
      if (response && response.headers) {
        this.makeMiniProfilerRequests(response.headers);
      }
    }
  }

  errorStatusAction(error: any) {
    if (error.status === 401) {
      // this.eventService.publish(
      //   {
      //     messageType: Constants.UnauthorizedAccessEvent.toString(),
      //     payload: true
      //   }
      // );
    } else {
      this.showHttpErrorDialog(error);
    }
  }

  /**
    * Descp: Function shows popup whenever any error occours in api
  * @param error : error message 
    * @returns show the error in the alert modal
    */
  showHttpErrorDialog(error: any) {
    this.ngZone.run(() => {
      // if (!this.errorDialogRef) {
      //   this.errorDialogRef = this.dialogService.open({
      //     content: HeaderAlertModalComponent,
      //   });
        // const userInfo = this.errorDialogRef.content.instance;
        let message = '';
        message = Messages.Dialog_Message_Error;
        if (error.error && error.error.message) {
          message = error.error.message;
        }
        alert(message);
      //   this.errorDialogRef.result
      //     .subscribe((resp: any) => {
      //       this.errorDialogRef = null;  // clear old reference
      //     });
      // }
    });
  }

  /**
   * Descp:Function to make miniProfiler response
   * @param headers:http headers
   */
  private makeMiniProfilerRequests(headers: HttpHeaders) {
    const miniProfilerHeaders = headers.getAll('x-miniprofiler-ids');
    if (!miniProfilerHeaders) {
      return;
    }
    miniProfilerHeaders.forEach(miniProfilerIdHeaderValue => {
      const ids = JSON.parse(miniProfilerIdHeaderValue) as string[];
      if (typeof MiniProfiler !== 'undefined' && MiniProfiler) {
        MiniProfiler.fetchResults(ids);
      }
    });
  }
}
