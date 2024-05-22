import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/http/base-http.service';
import { EndPointService } from '../core/http/end-point.service';
import { catchError, map, timeout } from 'rxjs';
import { ModuleConstants } from '../core/constants/constants';
import { CommonUtilsService } from '../shared/services/common-utils.service';

@Injectable({
  providedIn: 'root'
})
export class ResourceSheetService {

  constructor(
    private baseHttpService: BaseHttpService,
    private endPointService: EndPointService,
    private commonUtilsProvider:CommonUtilsService
  ) { }

  GetAllEmployees() {
    return this.baseHttpService.get(this.endPointService.GetAllEmployees).pipe(
      timeout(ModuleConstants.apiTimeout),
      map((res) => this.commonUtilsProvider.extractData(res)),
      catchError((err) => this.commonUtilsProvider.catchError(err))
    );
  }
}
