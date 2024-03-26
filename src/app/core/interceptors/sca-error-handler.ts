import { ErrorHandler, Injectable } from '@angular/core';
import { LoggingService } from '../services/utils/logging.service';

@Injectable({
  providedIn: 'root'
})
export class SCAErrorHandler extends ErrorHandler {

  langJsonData: any;
  constructor(private loggingService: LoggingService) {
    super();
  }

  /**
   * Handles error
   * @param error : error object
   */
  public override handleError(error: any) {
    this.loggingService.logException(error); // logging exception
  }
}
