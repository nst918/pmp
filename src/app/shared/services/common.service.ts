import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, timeout } from 'rxjs';
import { BaseHttpService } from '../../core/http/base-http.service';
import { EndPointService } from '../../core/http/end-point.service';
import { ModuleConstants, rolePermission } from '../../core/constants/constants';
import { CommonUtilsService } from './common-utils.service';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  currentUserRole: string= rolePermission.EMP;
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  constructor(
    private http:BaseHttpService,
    private endPointService:EndPointService,
    private commonUtilsProvider:CommonUtilsService
    ) { }
  
  getRole() {
    return this.currentUserRole;
  }
  setRole(role: string) {
    this.currentUserRole = role;
  }

  getEmployees() {
    return this.http.get(this.endPointService.GetEmployees)
    .pipe(
      timeout(ModuleConstants.apiTimeout),
      map((res) => this.commonUtilsProvider.extractData(res)),
      catchError((err) => this.commonUtilsProvider.catchError(err))
    );
  }

}