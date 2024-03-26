import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, timeout } from 'rxjs';
import { BaseHttpService } from '../core/http/base-http.service';
import { EndPointService } from '../core/http/end-point.service';
import { ModuleConstants } from '../core/constants/constants';
import { CommonUtilsService } from '../shared/services/common-utils.service';

export interface attendanceModal {
  startDate: string,
  endDate: string,
  employeeId: string
}

@Injectable({
  providedIn: 'root'
})

export class MyAttendanceService {
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  constructor(
    private http:BaseHttpService,
    private endPointService:EndPointService,
    private commonUtilsProvider:CommonUtilsService
    ) { }

  getAttendance(obj:attendanceModal):Observable<any>{
    return this.http.post(this.endPointService.GetAttendance, obj).pipe(
      timeout(ModuleConstants.apiTimeout),
      map((res) => this.commonUtilsProvider.extractData(res)),
      catchError((err) => this.commonUtilsProvider.catchError(err))
    );
  };
  
}