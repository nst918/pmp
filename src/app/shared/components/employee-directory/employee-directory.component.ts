import { Component, ViewChildren, QueryList, ElementRef, NgZone, OnDestroy, Injector, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { CommonService } from '../../services/common.service';
import { DialogService, DynamicDialogComponent, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { NgxPubSubService } from '@pscoped/ngx-pub-sub';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { Constants } from '../../../core/constants/constants';
import { StorageProvider } from '../../../core/http/storage-service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  standalone: true,
  selector: 'app-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrls: ['./employee-directory.component.scss'],
  imports: [AutoCompleteModule, InputNumberModule, FormsModule, ReactiveFormsModule, CommonModule, CalendarModule, DropdownModule]
})

export class EmployeeDirectoryComponent implements OnInit {
  @Output() selectedEmployee = new EventEmitter<any>;
  employeeList: any[];
  empDetails: any;
  selectedEmp: any;
  filteredEmp: any[];

  allocationPercent: Number;

  askAllocation: boolean= false;
  empForm: FormGroup;

  instance: DynamicDialogComponent | undefined;

  projectsList: Array<{}> = [
    // {projectId: 'p1', name: 'LivaNova'},
    // {projectId: 'p2', name: 'SCA'},
    // {projectId: 'p3', name: 'Multiplier'},
    // {projectId: 'p4', name: 'DOE Askfood-BOH'},
    // {projectId: 'p5', name: 'DOE Askfood-AA'},
    // {projectId: 'p6', name: 'DOE Askfood-WHAM'},
    // {projectId: 'p7', name: 'Protrack'}
  ];
  constructor(
    private commonService: CommonService,
    private employeeService: EmployeeService,
    public ref: DynamicDialogRef, 
    public fb: FormBuilder, 
    private dialogService: DialogService,
    private pubSubService: NgxPubSubService,
    private storageProvider: StorageProvider,
  ) {
    this.instance = this.dialogService.getInstance(this.ref);

    this.empForm = this.fb.group({
      projectId: ['', Validators.required],
      selectedEmp: ['', Validators.required],
      comment: [],
      allocationPercent: ['', Validators.required],
      fromDate: ['', Validators.required],
      tillDate: ['', Validators.required]
    });

    this.empDetails = this.storageProvider.getSessionStorageData(Constants.CurrentUser);
  }

  /**
   * method used to subscribe the event emitters and get the user data if user is login
   * @returns promise wether user choose ok or cancel for the confirmation dialog
  */
  ngOnInit() {
    this.commonService.getEmployees().subscribe({
      next: (data: any) => {
        this.employeeList = data.data;
      },error: (err: any) => {
        console.log(err);
      }
    })
    
    if (this.commonService.getProjectList().length) {
      this.projectsList = this.commonService.getProjectList();
    }else {
      this.commonService.getUserProjects(this.empDetails.id).subscribe({
        next: (success) => {
          // console.log("success => ", success);
          this.projectsList = success.data;
          this.commonService.setProjectList(success.data);
        },
        error: (err) => {
          console.log("Err => ", err);
        },
      })
    }
  }

  filterEmp(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < (this.employeeList as any[]).length; i++) {
      let emp = (this.employeeList as any[])[i];
      if (emp.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(emp);
      }
    }
    this.filteredEmp = filtered;
  }

  emitSelected(ev: any) {
    this.selectedEmp = ev;
    this.selectedEmployee.emit(this.selectedEmp);
  }

  request() {
    this.employeeService.requestEmployees(this.empForm.value).subscribe({
      next: (success: any) => {
        this.pubSubService.publishEvent('toastMessage', {severity: 'success', header: 'Success', body: success.Message});
      },error: (err: any) => {
        this.pubSubService.publishEvent('toastMessage', {severity: 'success', header: 'Success', body: err.Message});
      }
    })
    this.instance?.close();
  }

}