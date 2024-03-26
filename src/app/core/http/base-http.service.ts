import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  // Pass header parameters
  httpRequestOptions = {
    headers: new HttpHeaders({})
  };

  constructor(private httpClient: HttpClient) { }
  baseUrl: string = environment.apiEndPoint;

  /**
   * Function used for HTTP get
   * @param relativeUrl API endpoint
   * @param options Optional parameters
   */
  public get<T, OT = any>(relativeUrl: string, options?: OT) {
    return this.httpClient.get<T>(`${this.baseUrl}${relativeUrl}`);
  }

  /**
   * Function used for HTTP get post
   * @param relativeUrl API endpoint
   * @param data Data object
   * @param options Optional parameters
   */
  public post<T, OT = any>(relativeUrl: string, data: T, options?: OT) {
    return this.httpClient.post<T>(`${this.baseUrl}${relativeUrl}`, data);
  }

  /**
   * Function used for HTTP put
   * @param relativeUrl API endpoint
   * @param data Data object
   * @param options Optional parameters
   */
  public put<T, OT = any>(relativeUrl: string, data?: T, options?: OT) {
    return this.httpClient.put<T>(`${this.baseUrl}${relativeUrl}`, data);
  }

  /**
   * Function used for HTTP delete
   * @param relativeUrl: API endpoint
   * @param options: Optional parameters
   */
  public delete<T, OT = any>(relativeUrl: string, options?: OT) {
    return this.httpClient.delete<T>(`${this.baseUrl}${relativeUrl}`);
  }
}
