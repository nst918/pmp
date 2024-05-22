import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndPointService {
  /** User Attendance */
  GetAttendance = 'Attendance/Attendance/GetAttendance';
  
  /** Get Project listing */
  GetAllProjects = 'ProjectManagement/GetAllProjectsByEmployeeId';
  /** Get project detail */
  GetProjects = 'ProjectManagement/GetProjectsById';
  // GetProjectDetails = 'ProjectManagement/GetEmployeeProjects';
  
  /** Get employees listing */
  GetAllEmployees = 'ProjectManagement/GetAllEmployees';
  
  RequestEmployeesAllocation = 'User/RequestEmployeesAllocation';
  
  /** Post weekly status report */
  CreateProjectStatus = 'ProjectManagement/CreateProjectStatus';

  /** Get submitted weekly report */
  GetWeeklyReportList = 'ProjectManagement/GetAllProjectStatusReports';

  /** Get Project status by id */
  GetWeeklyReport = 'ProjectManagement/GetProjectStatus';
  
  GetRequests = 'GetRequests';
}

