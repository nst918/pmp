import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, timeout } from 'rxjs';
import { BaseHttpService } from '../../core/http/base-http.service';
import { EndPointService } from '../../core/http/end-point.service';
import { ModuleConstants } from '../../core/constants/constants';
import { CommonUtilsService } from './common-utils.service';

@Injectable({
  providedIn: 'root'
})

export class ReportService {
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  constructor(
    private http:BaseHttpService,
    private endPointService:EndPointService,
    private commonUtilsProvider:CommonUtilsService
    ) { }
  
  submitWeeklyReport(body: any) {
    return this.http.post(this.endPointService.CreateProjectStatus, body)
    .pipe(
      timeout(ModuleConstants.apiTimeout),
      map((res) => this.commonUtilsProvider.extractData(res)),
      catchError((err) => this.commonUtilsProvider.catchError(err))
    );
  }

  getWeeklyReportList(body: {csvProjectIds: Array<number>, userId: Number, fromDate?: Date, toDate?: Date}) {
    return this.http.get(this.endPointService.GetWeeklyReportList + '?' + this.commonUtilsProvider.serialize(body))
    .pipe(
      timeout(ModuleConstants.apiTimeout),
      map((res) => this.commonUtilsProvider.extractData(res)),
      catchError((err) => this.commonUtilsProvider.catchError(err))
    );
  }
  
  getReportById(body: {ProjectStatusId: string}) {
    return this.http.get(this.endPointService.GetWeeklyReport + '?' + this.commonUtilsProvider.serialize(body))
    .pipe(
      timeout(ModuleConstants.apiTimeout),
      map((res) => this.commonUtilsProvider.extractData(res)),
      catchError((err) => this.commonUtilsProvider.catchError(err))
    );
  }

}