import { Component, OnInit } from '@angular/core';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogComponent, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReportService } from '../../shared/services/report.service';
import { NgxPubSubService } from '@pscoped/ngx-pub-sub';
import { Messages } from '../../core/messages/messages';
import { reportModel } from '../../core/models/api-status';
import { StorageProvider } from '../../core/http/storage-service';
import { Constants } from '../../core/constants/constants';

@Component({
  selector: 'weekly-report',
  templateUrl: './weekly-report.component.html',
  animations: [appModuleAnimation()],
  styles: `
  .fa-xmark { 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  `
})

export class WeeklyReportComponent implements OnInit {
  reportForm: FormGroup;
  instance: DynamicDialogComponent | undefined;  
  isSubmitted: boolean= false;
  projectId: any= '';
  empDetails: any;
  
  isAddingNewDependency: boolean= false;
  isAddingNewRisk: boolean= false;
  isAddingNewStep: boolean= false;

  maxDate: Date= new Date();

  reportDetail: reportModel;

  ragStatus: Array<{}>= [
    {label: 'Status-R', value: 1}, 
    {label: 'Status-A', value: 2}, 
    {label: 'Status-G', value: 3}];
  ragSchedule: Array<{}>= [
    {label: 'Schedule-R', value: 1}, 
    {label: 'Schedule-A', value: 2}, 
    {label: 'Schedule-G', value: 3}];
  ragScope: Array<{}>= [
    {label: 'Scope-R', value: 1}, 
    {label: 'Scope-A', value: 2}, 
    {label: 'Scope-G', value: 3}];
  ragEffort: Array<{}>= [
    {label: 'Effort-R', value: 1}, 
    {label: 'Effort-A', value: 2}, 
    {label: 'Effort-G', value: 3}];

  reportSchema= {
    "projectId": 0,
    "keyProjectUpdates": "string",
    "schedule": 0,
    "effortCost": 0,
    "scope": 0,
    "status": 0,
    "dependencies": [
      {
        "description": "string",
        "owner": "string",
        "etd": "string"
      }
    ],
    "topRiskIssue": [
      {
        "riskIssue": "string",
        "description": "string",
        "owner": "string",
        "priority": "string",
        "etd": "string"
      }
    ],
    "nextSteps": [
      {
        "description": "string",
        "owner": "string",
        "etd": "string"
      }
    ]
  }

  constructor(
    private reportService: ReportService,
    private fb: FormBuilder,
    public ref: DynamicDialogRef, 
    private dialogService: DialogService,
    private storageProvider: StorageProvider,
    private pubSubService: NgxPubSubService
  ) {
    this.instance = this.dialogService.getInstance(this.ref);
    this.reportForm = this.fb.group({
      keyProjectUpdates: ['', Validators.required],
      status: ['', Validators.required],
      schedule: ['', Validators.required],
      scope: ['', Validators.required],
      effortCost: ['', Validators.required],
      dependencies: this.fb.array([]),
      topRiskIssue: this.fb.array([]),
      nextSteps: this.fb.array([])
    });
    this.empDetails = this.storageProvider.getSessionStorageData(Constants.CurrentUser);
  }

  ngOnInit(): void {
    if (this.instance && this.instance.data) {
      if (this.instance.data['projectId']) {
        this.projectId = this.instance.data['projectId'];
      }
      if (this.instance.data['reportDetail']) {
        this.reportDetail = this.instance.data['reportDetail'];
        this.reportForm.patchValue(this.reportDetail);
      }
    }
  }

  removeOrClearEmail(controlName: string, i: number) {
    const control = this.reportForm.get(controlName) as FormArray
    if (control.length) {
      control.removeAt(i);
    } else {
      control.reset();
    }
  }

  addFormControl(_control: string) {
    let control = this.reportForm.get(_control) as FormArray;
    this.isSubmitted = false;
    switch (_control) {
      case 'dependencies':
        if (control.valid) {
          this.isAddingNewDependency =false;
          control.push(this.createDependencyFormGroup());
        }else {
          this.isAddingNewDependency =true;
        }
        break;
      case 'topRiskIssue':
        if (control.valid) {
          this.isAddingNewRisk = false;
          control.push(this.createRiskFormGroup());
        }else {
          this.isAddingNewRisk = true;
        }
        break;
      case 'nextSteps':
        if (control.valid) {
          this.isAddingNewStep = false;
          control.push(this.createDependencyFormGroup());
        }else {
          this.isAddingNewStep = true;
        }
        break;
      default:
        break;
    }
  }

  showErr(control1: string, index: number, control2: string) {
    let _control = this.reportForm.get(control1) as FormArray;
    return _control.controls[index].get(control2);
  }

  createDependencyFormGroup(): FormGroup {
    return this.fb.group({
      'description': ['', Validators.required],
      'owner': ['', Validators.required],
      'etd': ['', Validators.required]
    })
  }

  getControls(controlName: string) {
    let control = this.reportForm.get(controlName) as FormArray;
    return control;
  }

  createRiskFormGroup(): FormGroup {
    return this.fb.group({
      'riskIssue': ['', Validators.required],
      'description': ['', Validators.required],
      'owner': ['', Validators.required],
      'priority': ['', Validators.required],
      'etd': ['', Validators.required]
    })
  }

  submitReport() {
    this.isSubmitted = true;
    let obj = JSON.parse(JSON.stringify(this.reportForm.value));
    obj['projectId'] = parseInt(this.projectId);
    obj['submittedBy'] = this.empDetails.id;
    obj['submittedBy'] = 134;
    obj['submitDate'] = new Date();
    if (this.reportForm.valid) {
      this.reportService.submitWeeklyReport(obj).subscribe({
        next: (success) => {
          this.isSubmitted = false;
          this.instance?.close();
          this.pubSubService.publishEvent('toastMessage', {severity: 'success', header: 'Success', body: success.Message});
        }, error: (err) => {
          this.isSubmitted = false;
          this.instance?.close();
          this.pubSubService.publishEvent('toastMessage', {severity: 'error', header: 'Error', body: err.Message});
        }
      })
    }
  }
}
