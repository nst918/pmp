import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndPointService {
  /** User Attendance */
  GetAttendance = 'Attendance/Attendance/GetAttendance';
  
  /** Project Details */
  GetProjects = 'User/GetProjects';
  GetProjectDetails = 'User/GetProjectDetails';
  
  GetEmployees = 'User/GetEmployees';
  
  RequestEmployeesAllocation = 'User/RequestEmployeesAllocation';
  WeeklyReport = 'User/WeeklyReport';
  GetWeeklyReportList = 'User/GetWeeklyReportList';
  GetWeeklyReport = 'User/GetWeeklyReport';
  GetWeeklyReportPMO = 'User/GetWeeklyReportPMO';
  
  GetRequests = 'GetRequests';
}

