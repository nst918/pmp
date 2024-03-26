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

export class EmployeeService {
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  constructor(
    private http:BaseHttpService,
    private endPointService:EndPointService,
    private commonUtilsProvider:CommonUtilsService
    ) { }
  
  requestEmployees(body: any) {
    return this.http.post(this.endPointService.RequestEmployeesAllocation, body)
    .pipe(
      timeout(ModuleConstants.apiTimeout),
      map((res) => this.commonUtilsProvider.extractData(res)),
      catchError((err) => this.commonUtilsProvider.catchError(err))
    );
  }

}