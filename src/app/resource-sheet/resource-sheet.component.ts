import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { resourceSheetModel } from '../core/models/api-status';
import { ResourceSheetService } from './resource-sheet.service';
import { EmployeeDirectoryComponent } from '../shared/components/employee-directory/employee-directory.component';

@Component({
  selector: 'app-resource-sheet',
  templateUrl: './resource-sheet.component.html',
  styleUrl: './resource-sheet.component.css'
})
export class ResourceSheetComponent implements OnInit {
  resourceData: Array<resourceSheetModel>= []

  columns = [
    { field: 'employeeId', header: 'Emp ID' },
    { field: 'EmployeeName', header: 'Employee Name' },
    { field: 'email', header: 'Employee Email' },
    { field: 'DOJ', header: 'DOJ' },
    { field: 'OverallExp', header: 'Overall Exp' },
    { field: 'ReportingTo-AD', header: 'Reporting To -AD' },
    { field: 'ManagerforHRMS', header: 'Manager for HRMS' },
    { field: 'Designation', header: 'Designation' },
    { field: 'ProjectFunctionName	', header: 'Project/Function Name	' },
    { field: 'GTGOrgActivities', header: 'GTG/ Org Activities' },
    { field: 'ProjectType', header: 'Project Type' },
    { field: 'Location', header: 'Location' },
    { field: 'EmploymentType', header: 'Employment Type' },
    { field: 'Trainee', header: 'Trainee(Y/N)' },
    { field: 'Shared', header: 'Shared(Y/N)' },
    { field: 'RoleLevel', header: 'Role Level' },
    { field: 'Client', header: 'Client' },
    { field: 'Competency', header: 'Competency' },
    { field: 'PrimarySkills', header: 'Primary Skills' },
    { field: 'SecondarySkills', header: 'Secondary Skills' },
    { field: 'Billable', header: 'Billable' },
    { field: 'Billed', header: 'Billed' },
    { field: 'DepartmentName', header: 'Department Name' },
    { field: 'FunctionName', header: 'Function Name' },
    { field: 'NSTExp', header: 'NST Exp' },
    { field: 'NSTExpasNum', header: 'NST Exp as Num' },
    { field: 'Expatthetimeofhiring', header: 'Exp at the time of hiring' },
    { field: 'PercentageAllocation', header: 'Percentage Allocation' },
    { field: 'FromDate', header: 'From Date' },
    { field: 'ToDate', header: 'To Date' },
    { field: 'Today', header: 'Today' },
    { field: 'NOD', header: 'NOD' },
    { field: 'WorkingHours', header: 'Working Hours' },
    { field: 'Remarks', header: 'Remarks' }
  ];

  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private resourceSheetService: ResourceSheetService

  ) {}

  ngOnInit(): void {
    this.getAllEmloyees();
  }
  
  getAllEmloyees() {
    this.resourceSheetService.GetAllEmployees().subscribe({
      next: (success) => {
        this.resourceData = success['data'];
      }, error: (err) => {
        console.log(err);
      }
    })
  }

  addEmployee() {
    // this.ref = this.dialogService.open(AddEmployeeComponent, { 
    //   header: 'Employee Details',
    //   width: '80vw'
    // });
    this.ref = this.dialogService.open(EmployeeDirectoryComponent, { 
      header: 'Request Employee Allocation'
    });
  }

  getOptions(fieldName: string) {
    return this.resourceData.map((obj: any)=>{return obj[fieldName]});
  }

}
