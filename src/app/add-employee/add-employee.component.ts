import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { appModuleAnimation } from '../shared/animations/routerTransition';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule, DropdownModule, CalendarModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
  animations: [appModuleAnimation()],
})
export class AddEmployeeComponent implements OnInit {
  empForm: FormGroup;
  maxDate: Date= new Date();

  locationList: Array<{label: string, value: string}>= [
    {label: 'SVAM Bangladesh', value: 'bangladesh'},
    {label: 'SVAM Canada', value: 'canada'},
    {label: 'SVAM India', value: 'india'},
    {label: 'SVAM Mexico', value: 'mexico'},
    {label: 'SVAM US', value: 'us'}
  ];
  departmentList: Array<{label: string, value: string}>= [
    {label: 'Admin', value: '1'},
    {label: 'Domentic Staffing', value: '2'},
    {label: 'Finance & Accounts', value: '3'},
    {label: 'Human Resource', value: '4'},
    {label: 'Infrastructure', value: '5'},
    {label: 'Management', value: '6'},
    {label: 'Quality', value: '7'},
    {label: 'Sales', value: '8'},
    {label: 'Solution Canada', value: '9'},
    {label: 'Solution Mexico', value: '10'},
    {label: 'Solution NST', value: '11'},
    {label: 'Solution SVAM', value: '12'},
    {label: 'US Consulting', value: '13'},
    {label: 'US Staffing', value: '14'}
  ];
  empModeList: Array<{label: string, value: string}>= [
    {label: 'Client', value: 'client'},
    {label: 'Consultant', value: 'consultant'},
    {label: 'Contractual', value: 'contractual'},
    {label: 'Permanent', value: 'permanent'}
  ];
  currentDesignationList: Array<{label: string, value: string}>= [
    {label: 'Account Finance', value: 'accountFinance'},
    {label: 'Android Developer', value: 'androidDeveloper'},
    {label: 'Associate Architect', value: 'associateArchitect'},
    {label: 'Associate Consultant', value: 'associateConsultant'},
    {label: 'Associate Research Analyst', value: 'associateResearchAnalyst'},
    {label: 'Associate Sharepoint Architecture', value: 'associateSharepointArchitecture'},
    {label: 'Associate Software Engineer', value: 'associateSoftwareEngineer'},
    {label: 'Asst QA Manager', value: 'asstQAManager'},
    {label: 'Business Analyst', value: 'businessAnalyst'},
    {label: 'CFO Account', value: 'cFOAccount'},
    {label: 'Chief Operating Officer', value: 'chiefOperatingOfficer'},
    {label: 'Client Manager', value: 'clientManager'},
    {label: 'Configuration Manager', value: 'configurationManager'},
    {label: 'Cost Estimator', value: 'costEstimator'},
    {label: 'Creative Designer', value: 'creativeDesigner'},
    {label: 'Cybersecurity Advisor', value: 'cybersecurityAdvisor'},
    {label: 'Cybersecurity Analyst', value: 'cybersecurityAnalyst'},
    {label: 'Cybersecurity Architect', value: 'cybersecurityArchitect'},
    {label: 'Cybersecurity Planner', value: 'cybersecurityPlanner'},
    {label: 'Data Analyst', value: 'dataAnalyst'},
    {label: 'DB Designer', value: 'dBDesigner'},
    {label: 'Delivery Director', value: 'deliveryDirector'}
  ];
  verticalList: Array<{label: string, value: string}>= [
    {label: '.Net/Angular', value: '.Net/Angular'},
    {label: 'Business Analyst', value: 'BusinessAnalyst'},
    {label: 'Business Intelligence', value: 'BusinessIntelligence'},
    {label: 'Client', value: 'Client'},
    {label: 'Cybersecurity', value: 'Cybersecurity'},
    {label: 'Data Analyst', value: 'DataAnalyst'}
  ];
  reportingList: Array<{label: string, empCode: string}>= [
    {label: 'Rahul Saxena', empCode: 'e01'},
    {label: 'Rahul Saxena', empCode: 'e02'}
  ];
  selectFunctionList: Array<{label: string, value: string}>= [
    {label: 'HR', value: 'hr'},
    {label: 'Accounts', value: 'accounts'}
  ];
  selectRoleList: Array<{label: string, value: string}>= [
    {label: 'HR Executive', value: 'hrex'}
  ];
  genderList: Array<{label: string, value: string}>= [
    {label: 'Male', value: 'M'},
    {label: 'Female', value: 'F'}
  ];

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.empForm = this.fb.group({
      empCode: ['', [Validators.required]],
      empName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      emailId: ['', [Validators.required]],
      doj: [''],
      lwd: [''],
      location: ['', [Validators.required]],
      department: ['', [Validators.required]],
      empMode: ['', [Validators.required]],
      currentDesignation: [''],
      vertical: ['', [Validators.required]],
      reporting: [''],
      selectFunction: ['', [Validators.required]],
      selectRole: ['', [Validators.required]],
      billable: ['', [Validators.required]]
    })
  }

  addEmployee() {
    
  }
}
