import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, timeout } from 'rxjs';
import { BaseHttpService } from '../core/http/base-http.service';
import { EndPointService } from '../core/http/end-point.service';
import { ModuleConstants } from '../core/constants/constants';
import { CommonUtilsService } from '../shared/services/common-utils.service';
import { ProjectSummaryIQMSDto } from '../core/models/api-status';

@Injectable({
  providedIn: 'root'
})

export class RequestService {
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  constructor(
    private http:BaseHttpService,
    private endPointService:EndPointService,
    private commonUtilsProvider:CommonUtilsService,
    ) { }
  
  getRequests() {
    return this.http.get(this.endPointService.GetRequests).pipe(
      timeout(ModuleConstants.apiTimeout),
      map((res) => this.commonUtilsProvider.extractData(res)),
      catchError((err) => this.commonUtilsProvider.catchError(err))
    );
  }
}