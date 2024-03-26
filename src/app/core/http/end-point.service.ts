import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndPointService {
  /** User Attendance */
  GetAttendance = 'https://hrms.svamindia.com/Attendance/Attendance/GetAttendance';
  
  /** Project Details */
  GetProjects = 'https://hrms.svamindia.com/User/GetProjects';
  GetProjectDetails = 'https://hrms.svamindia.com/User/GetProjectDetails';
  
  GetEmployees = 'https://hrms.svamindia.com/User/GetEmployees';
  
  RequestEmployeesAllocation = 'https://hrms.svamindia.com/User/RequestEmployeesAllocation';
  WeeklyReport = 'https://hrms.svamindia.com/User/WeeklyReport';
  GetWeeklyReportList = 'https://hrms.svamindia.com/User/GetWeeklyReportList';
  GetWeeklyReport = 'https://hrms.svamindia.com/User/GetWeeklyReport';
  GetWeeklyReportPMO = 'https://hrms.svamindia.com/User/GetWeeklyReportPMO';
  
  GetRequests = 'https://hrms.svamindia.com/GetRequests';
}

