import { Component, OnInit } from '@angular/core';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogComponent, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReportService } from '../../shared/services/report.service';
import { NgxPubSubService } from '@pscoped/ngx-pub-sub';
import { Messages } from '../../core/messages/messages';
import { reportModel } from '../../core/models/api-status';

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
  
  isAddingNewDependency: boolean= false;
  isAddingNewRisk: boolean= false;
  isAddingNewStep: boolean= false;

  maxDate: Date= new Date();

  reportDetail: reportModel;

  ragStatus: Array<string>= ['Status-R', 'Status-A', 'Status-G'];
  ragSchedule: Array<string>= ['Schedule-R', 'Schedule-A', 'Schedule-G'];
  ragScope: Array<string>= ['Scope-R', 'Scope-A', 'Scope-G'];
  ragEffort: Array<string>= ['Effort-R', 'Effort-A', 'Effort-G'];

  constructor(
    private reportService: ReportService,
    private fb: FormBuilder,
    public ref: DynamicDialogRef, 
    private dialogService: DialogService,
    private pubSubService: NgxPubSubService
  ) {
    this.instance = this.dialogService.getInstance(this.ref);
    this.reportForm = this.fb.group({
      description: ['', Validators.required],
      ragStatus: ['', Validators.required],
      ragSchedule: ['', Validators.required],
      ragScope: ['', Validators.required],
      ragEffort: ['', Validators.required],
      dependencies: this.fb.array([]),
      riskIssue: this.fb.array([]),
      nextStep: this.fb.array([])
    });
  }

  ngOnInit(): void {
    if (this.instance && this.instance.data) {
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
      case 'riskIssue':
        if (control.valid) {
          this.isAddingNewRisk = false;
          control.push(this.createRiskFormGroup());
        }else {
          this.isAddingNewRisk = true;
        }
        break;
      case 'nextStep':
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
      'risk': ['', Validators.required],
      'description': ['', Validators.required],
      'owner': ['', Validators.required],
      'priority': ['', Validators.required],
      'etd': ['', Validators.required]
    })
  }

  submitReport() {
    this.isSubmitted = true;
    if (this.reportForm.valid) {
      this.reportService.submitWeeklyReport(this.reportForm.value).subscribe({
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
