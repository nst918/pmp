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

  locationList: Array<{label: string, value: string}>= [];
  departmentList: Array<{label: string, value: string}>= [];
  empModeList: Array<{label: string, value: string}>= [];
  currentDesignationList: Array<{label: string, value: string}>= [];
  verticalList: Array<{label: string, value: string}>= [];
  reportingList: Array<{label: string, value: string}>= [];
  selectFunctionList: Array<{label: string, value: string}>= [];
  selectRoleList: Array<{label: string, value: string}>= [];
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
