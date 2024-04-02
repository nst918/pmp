import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { resourceSheetModel } from '../core/models/api-status';

@Component({
  selector: 'app-resource-sheet',
  templateUrl: './resource-sheet.component.html',
  styleUrl: './resource-sheet.component.css'
})
export class ResourceSheetComponent implements OnInit {
  searchCriteria: FormGroup;
  maxDate: Date= new Date();

  resourceData: Array<resourceSheetModel>= [
    {EmpID: 'NST/31',EmployeeName: 'Saket Madan',DOJ: '1 June 2006',OverallExp: '23.9',ReportingTo: 'Manish Sehgal',ManagerforHRMS: 'Manish Sehgal',Designation: 'IT Head - India Operations',ProjectFunctionName: 'IT Support',GTGOrgActivities: 'NST Managed (SVAM)',ProjectType: 'India',Location: 'Permanent',EmploymentType: 'No',Trainee: 'No',Shared: 'P05',RoleLevel: 'SVAM',Client: 'IT Support',Competency: 'IT Support',PrimarySkills: 'Billable',SecondarySkills: '',Billable: 'Not Billed',Billed: 'Operation Team',DepartmentName: 'IT Support',FunctionName: '17.9',NSTExp: '17.9',NSTExpasNum: '6',Expatthetimeofhiring: '1',PercentageAllocation: '01-Dec-22',FromDate: '31-Dec-24',ToDate: '',Today: '',NOD: '',WorkingHours: '',Remarks: ''},
    {EmpID: 'NST/72',EmployeeName: 'Anand Nagpal',DOJ: '29 May 2007',OverallExp: '16.9',ReportingTo: 'Aditya Kumar',ManagerforHRMS: 'Aditya Kumar',Designation: 'Technical Project Manager',ProjectFunctionName: 'State Aid Modernization',GTGOrgActivities: '',ProjectType: 'NST Managed (SVAM)',Location: 'India',EmploymentType: 'Permanent',Trainee: 'No',Shared: 'Yes',RoleLevel: 'P05',Client: 'SCA',Competency: 'Project Management',PrimarySkills: 'C# ASP .Net MVC , .Net Core',SecondarySkills: '.Net',Billable: 'Billable',Billed: 'Billed',DepartmentName: 'Solution Team',FunctionName: 'Delivery Team',NSTExp: '16.9',NSTExpasNum: '16.9',Expatthetimeofhiring: '0',PercentageAllocation: '0.1',FromDate: '01-May-23',ToDate: '30-Apr-24',Today: '21-Mar-24',NOD: '40.00',WorkingHours: '232.00',Remarks: ''}
  ]

  columns = [
    { field: 'EmpID', header: 'Emp ID' },
    { field: 'EmployeeName', header: 'Employee Name' },
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

  billableStatusList: Array<string> = ['Billable', 'Non-Billable'];

  allocation: Array<{}> = [
    {label: '100%', value: 100},
    {label: 'greater than 75%', value: 'gt 75'},
    {label: 'less than 75%', value: 'lt 75'},
    {label: 'greater than 50%', value: 'gt 50'},
    {label: 'less than 50%', value: 'lt 50'},
    {label: 'greater than 25%', value: 'gt 25'},
    {label: 'less than 25%', value: 'lt 25'},
    {label: 'Benching', value: '0'}
  ]

  projectsList: Array<{}> = [
    {projectId: 'p1', name: 'LivaNova'},
    {projectId: 'p2', name: 'SCA'},
    {projectId: 'p3', name: 'Multiplier'},
    {projectId: 'p4', name: 'DOE Askfood-BOH'},
    {projectId: 'p5', name: 'DOE Askfood-AA'},
    {projectId: 'p6', name: 'DOE Askfood-WHAM'},
    {projectId: 'p7', name: 'Protrack'}
  ];

  ref: DynamicDialogRef | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private dialogService: DialogService

  ) {}

  ngOnInit(): void {
    this.searchCriteria = this.formBuilder.group({
      projectList: [''],
      allocation: [''],
      billableStatus: ['']
    });
  }

  fetchBatchRecords() {
    
  }

  resetForm() {

  }

  addEmployee() {
    this.ref = this.dialogService.open(AddEmployeeComponent, { 
      header: 'Employee Details',
      width: '80vw'
    });
  }

  getOptions(fieldName: string) {
    return this.resourceData.map((obj: any)=>{return obj[fieldName]});
  }

}
