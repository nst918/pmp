import { Injectable } from '@angular/core';
import { ProviderResponseModel } from '../../core/models/api-status';
import { throwError } from 'rxjs';
import { Messages } from '../../core/messages/messages';
import { Constants } from '../../core/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilsService {

  constructor() { }

  /**
   * Desc: Function called to extract server data
   * @param:response data
   */
  public extractData(res: any): any {
    if (res !== undefined || res !== null) {
      return this.getProviderResObj(res.isSuccess, res, res.statusMessage);
    } else {
      return this.getProviderResObj(false, res, Messages.Dialog_Message_Error);
    }
  }

  /**
   * Return API response in custom format
   * @param status api status
   * @param isUserConfirmationRequired api status for showing confirm dialog
   * @param data api data
   * @param message api message
   */
  public getProviderResObj(status: any, data?: any, message?: any): any {
    const provResponseObj: ProviderResponseModel = new ProviderResponseModel();
    provResponseObj.status = status;
    provResponseObj.data = data === undefined ? '' : data.data;
    provResponseObj.message = message === undefined ? '' : message;

    return provResponseObj;
  }

  /**
   * Desc: Function called to throw error
   * @param err error code
   */
  public catchError(err: any): any {

    // Not throw error if 401 (Unauthorized)
    // 401 is handled on interceptor
    if (err.status !== 401) {
      if (err.name === 'TimeoutError') {
        alert(Constants.ConnectionTimeoutErrorEvent.toString());
      } else {
        return throwError(() => err);
      }
    }
  }

  serialize(obj: any) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

  public convertDateStringToMmDdYyyy(strDate: any): any {
    if (strDate != null && strDate !== '') {
      const date: any = new Date(strDate);
      let dd: any = date.getDate();
      let mm: any = date.getMonth() + 1;
      const yyyy = date.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      return mm + '/' + dd + '/' + yyyy;
    }
    return strDate;
  }
}
