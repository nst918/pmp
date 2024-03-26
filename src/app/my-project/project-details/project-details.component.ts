import { Component, Injector, ChangeDetectionStrategy, OnInit, ViewChild, Input } from '@angular/core';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import { ProjectDetailsService } from '../project-details.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogComponent, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmployeeDirectoryComponent } from '../../shared/components/employee-directory/employee-directory.component';
import { rolePermission } from '../../core/constants/constants';
import { WeeklyReportComponent } from '../weekly-report/weekly-report.component';
import { ProjectSummaryIQMSDto, reportModel } from '../../core/models/api-status';
import { NgxPubSubService } from '@pscoped/ngx-pub-sub';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';
import { ReportService } from '../../shared/services/report.service';
import { Messages } from '../../core/messages/messages';

export class updateFieldModel {
  name: string;
  label: string;
  type: string;
  right: string;
  values?: Array<any>;
}

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  animations: [appModuleAnimation()],
  styles: `
  .request-btn {
    position: absolute;
    right: 12px;
    top: 50%;
    width: auto;
    transform: translateY(-50%);
    &.btn, .btn {
      padding: 2px 6px;
      font-size: 14px;
    }
  }
  `
})

export class ProjectDetailsComponent implements OnInit {
  showDetailUpdateForm: boolean= false;
  isSubmitted: boolean= false;
  projectUpdateForm: FormGroup;
  detailForm: FormGroup;
  instance: DynamicDialogComponent | undefined;

  projectId: string;
  rolePermission= rolePermission;
  role: string= rolePermission.EMP;

  teamCols: Array<{}> = [
    {field: 'empCode', header: 'Emp Code'}, 
    {field: 'empName', header: 'Employee Name'}, 
    {field: 'designation', header: 'Designation'}
  ]

  projectDetail: any = {
    id: '3',
    ClientName: 'SCA',
    ProjectName: 'ABC',
    OnsitePM: {type: 2, name: 'Mridul'},
    OffshorePM: {type: 14, name: 'Prachi'},
    CurrentPhase: 'Testing',
    
    RAG_Scope: '',
    RAG_Schedule: '',
    RAG_Effort: '',

    ProjectStatusSummary: '',
    ProjectStartDate: new Date('01/16/2024'),
    PlanGoLiveDate: '',
    ActualGoLiveDate: '',
    PlannedEffort: '',
    ActualEffortInception: '',
    EstimationToComplete: '',
    EtcDate: '',
    ExpectedAtCompletion: '',
    Variance: '',
    AvgExp: '',
    Remarks: '',
    projectType: {type: 1, name: 'Fixed'},
    projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    teamDetails: [
      { empCode: '1', empName: 'Rahul Mishra', allocation: '100', designation: 'Angular Developer' },
      { empCode: '2', empName: 'Punit Singh', allocation: '100', designation: '.Net Developer' },
      { empCode: '3', empName: 'Manish Thakur', allocation: '50', designation: 'Tester' },
      { empCode: '4', empName: 'Manasvi Kauts', allocation: '50', designation: 'BA' },
      { empCode: '5', empName: 'Ankit Birla', allocation: '50', designation: 'Angular Developer' }
    ],
    OverallProjectRAG_status: '',
    projectStatus: '',
    forecastedEffort: '',
    clientProjectSectorType: 'Healthcare',
    projectDomain: 'RPA',
    devMethod: 'Agile',
    CustomerName: 'Northwell Health, Inc.',
    CustomerAddress: '450 Lakeville Rd, New Hyde Park, New York, 11042, United States',
    ClientContactPersonName: 'Kamel, Abdul-Rassoul',
    ClientContactPersonEmail: 'kabdulrassoul@northwell.edu',
    ClientDesignatedPMName: 'Viralkumar Shah',
    ClientDesignatedPMEmail: 'vshah16@northwell.edu',
    ProjectManagedBy: 'SVAM',
    ProjectBriefDescription: '',
    ProjectEnvironment: 'RPA (UiPath)',
    ProjectBriefScope: 'Reading fields and invoices from internal Northwell application (Unifier) and creating the requisite information in PeopleSoft',
    TotalProjectValue: '$58,040',
    ProjectExpectedEndDate: new Date('04/19/2024'),
    ProjectManDays: '14',
    OnshoreProjectManager: {type: 2, name: 'Mridul'},
    OffshoreProjectManager: {type: 14, name: 'Prachi'},
    SVAMDesignatedOnshorePMName: '',
    SVAMDesignatedOffshorePMName: '',
    ProjectLead: 'Shailendra Pal (Northwell)',
    ProjectCharterApproval: '',
    ProjectCharterReviewer: '',
    Milestone: '1) Robot capable of reading fields in Unifier and filling fields in PeopleSoft. 2) Robot capable of reading 20 invoice types',
    Risk: '1) Delay in Infra access. 2) Delay in UAT and SIT'
  };

  refComp: DynamicDialogRef | undefined;

  projectTypes: Array<{}> = [
    {type: 1, name: 'Fixed'},
    {type: 2, name: 'Support'}
  ]

  onsiteProjectMnagers: Array<{}> = [
    {type: 1, name: 'Abhishek'},
    {type: 2, name: 'Mridul'}
  ]

  offshoreProjectMnagers: Array<{}> = [
    {type: 14, name: 'Prachi'},
    {type: 22, name: 'Ankit'}
  ]
  
  projectPhase: Array<string> = ['CR', 'Go Live', 'Implementation', 'Requirement', 'Support/ Enhancement', 'Testing'];

  selectedField: any = '';
  selectedFields: Array<updateFieldModel>= [];
  updateFields: Array<updateFieldModel> = [
    {right: rolePermission.PM, name: 'CurrentPhase', label: 'Current Phase', type: 'dd', values: this.projectPhase},
    {right: rolePermission.PM, name: 'RAG_Scope', label: 'RAG Scope', type: 'text'},
    {right: rolePermission.PM, name: 'RAG_Schedule', label: 'RAG Schedule', type: 'text'},
    {right: rolePermission.PM, name: 'RAG_Effort', label: 'RAG Effort', type: 'text'},
    {right: rolePermission.PM, name: 'ProjectStartDate', label: 'Project Start Date', type: 'date'},
    {right: rolePermission.PM, name: 'PlanGoLiveDate', label: 'Plan Go Live Date', type: 'date'},
    {right: rolePermission.PM, name: 'ActualGoLiveDate', label: 'Actual Go Live Date', type: 'date'},
    {right: rolePermission.PM, name: 'PlannedEffort', label: 'Planned Effort', type: 'number'},
    {right: rolePermission.PM, name: 'ActualEffortInception', label: 'Actual Effort Inception', type: 'number'},
    {right: rolePermission.PM, name: 'EstimationToComplete', label: 'Estimation To Complete', type: 'number'},
    {right: rolePermission.PM, name: 'EtcDate', label: 'Etc Date', type: 'date'},
    {right: rolePermission.PM, name: 'ExpectedAtCompletion', label: 'Expected At Completion', type: 'number'},
    {right: rolePermission.PM, name: 'OverallProjectRAG_status', label: 'Overall Project RAG status', type: 'text'},
    {right: rolePermission.PM, name: 'projectStatus', label: 'Project Status', type: 'text'},
    {right: rolePermission.PM, name: 'forecastedEffort', label: 'Forecasted Effort', type: 'number'},
    {right: rolePermission.PMO, name: 'CustomerName', label: 'Customer Name', type: 'text'},
    {right: rolePermission.PMO, name: 'CustomerAddress', label: 'Customer Address', type: 'text'},
    {right: rolePermission.PMO, name: 'clientProjectSectorType', label: 'Client Project Sector Type', type: 'text'},
    {right: rolePermission.PMO, name: 'ClientContactPersonName', label: 'Client Contact PersonName', type: 'text'},
    {right: rolePermission.PMO, name: 'ClientContactPersonEmail', label: 'Client Contact Person Email', type: 'text'},
    {right: rolePermission.PMO, name: 'ClientDesignatedPMName', label: 'Client Designated PM Name', type: 'text'},
    {right: rolePermission.PMO, name: 'ClientDesignatedPMEmail', label: 'Client Designated PM Email', type: 'text'},
    {right: rolePermission.PMO, name: 'ProjectManagedBy', label: 'Project Managed By', type: 'text'},
    {right: rolePermission.PMO, name: 'ProjectName', label: 'Project Name', type: 'text'},
    {right: rolePermission.PMO, name: 'ProjectType', label: 'Project Type', type: 'dd', values: this.projectTypes},
    {right: rolePermission.PMO, name: 'ProjectDomain', label: 'Project Domain', type: 'text'},
    {right: rolePermission.PM, name: 'ProjectBriefDescription', label: 'Project Brief Description', type: 'text'},
    {right: rolePermission.PM, name: 'ProjectEnvironment', label: 'Project Environment', type: 'text'},
    {right: rolePermission.PM, name: 'ProjectBriefScope', label: 'Project Brief Scope', type: 'text'},
    {right: rolePermission.PMO, name: 'TotalProjectValue', label: 'Total Project Value', type: 'text'},
    {right: rolePermission.PM, name: 'ProjectExpectedEndDate', label: 'Project Expected EndDate', type: 'date'},
    {right: rolePermission.PM, name: 'ProjectManDays', label: 'Project Man Days', type: 'text'},
    {right: rolePermission.PMO, name: 'OnshoreProjectManager', label: 'Onshore Project Manager', type: 'dd', values: this.onsiteProjectMnagers},
    {right: rolePermission.PMO, name: 'OffshoreProjectManager', label: 'Offshore Project Manager', type: 'dd', values: this.offshoreProjectMnagers},
    {right: rolePermission.PMO, name: 'SVAMDesignatedOnshorePMName', label: 'SVAM Designated Onshore PM Name', type: 'dd', values: this.onsiteProjectMnagers},
    {right: rolePermission.PMO, name: 'SVAMDesignatedOffshorePMName', label: 'SVAM Designated Offshore PM Name', type: 'dd', values: this.offshoreProjectMnagers},
    {right: rolePermission.PMO, name: 'ProjectLead', label: 'Project Lead', type: 'text'},
    {right: rolePermission.PMO, name: 'ProjectCharterApproval', label: 'Project Charter Approval', type: 'text'},
    {right: rolePermission.PMO, name: 'ProjectCharterReviewer', label: 'Project Charter Reviewer', type: 'text'},
    {right: rolePermission.PM, name: 'Milestone', label: 'Milestone', type: 'text'},
    {right: rolePermission.PM, name: 'Risk', label: 'Risk', type: 'text'}
  ];
  editMode: boolean= false;

  constructor(
    injector: Injector,
    private projectDetailsService: ProjectDetailsService,
    private reportService: ReportService,
    private commonService: CommonService,
    private fb: FormBuilder,
    public ref: DynamicDialogRef, 
    public pubSubService: NgxPubSubService, 
    private dialogService: DialogService,
    private route: ActivatedRoute
  ) {
    this.projectUpdateForm = this.fb.group({
      comment: ['']
    });
    this.detailForm = this.fb.group({
      ProjectStartDate: [],
      ProjectExpectedEndDate: [],
      ProjectManDays: []
    });

    this.detailForm.patchValue(this.projectDetail);
    let params = this.route.snapshot.params;
    this.role = this.commonService.getRole();
    if (params['id']) {
      this.projectId = params['id'];
    }else {
      this.instance = this.dialogService.getInstance(this.ref);
    }

    if (this.role != rolePermission.PMO) {
      this.updateFields = this.updateFields.filter((field) => {
        return field.right == this.role
      });
    }
  }

  ngOnInit(): void {
    if (this.instance && this.instance.data) {
      this.projectId = this.instance.data['projectId'];
    }
    setTimeout(() => {
      this.getProjectDetails();
    });
  }

  getProjectDetails() {
    let _this = this;
    this.projectDetailsService.getProjectDetails(this.projectId).subscribe({
      next: (result: any) => {
      console.log("result => ", result);
      _this.projectDetail['ProjectName'] = Math.random();
    }, error: (err) => {
      console.log("err => ", err);
      _this.projectDetail['ProjectName'] = Math.random();
    }});
  }

  requestEmployee() {
    this.refComp = this.dialogService.open(EmployeeDirectoryComponent, { 
      header: 'Request Employee Allocation',
      data: {askAllocation: true}
    });
  }

  updateWeeklyReport(reportData?: reportModel) {
    if (this.refComp) {
      this.refComp.destroy();
    }
    let obj: any = {};
    if (reportData) {
      obj['reportDetail'] = reportData;
    }

    this.refComp = this.dialogService.open(WeeklyReportComponent, { 
      header: 'Update',
      width: '70vw',
      data: obj
    });
    
  }

  requestUpdate() {
    if (this.refComp) {
      this.refComp.destroy();
    }
    this.showDetailUpdateForm = true;
  }

  updateForm() {
    if (this.selectedField) {
      let field = JSON.parse(JSON.stringify(this.selectedField));
      if(field && !this.projectUpdateForm.contains(field.name)) {
        this.selectedFields.push(field);
        this.projectUpdateForm.addControl(field.name, this.fb.control('', [Validators.required]));
        this.selectedField = '';
        this.pubSubService.publishEvent('toastMessage', {severity: 'success', header: 'Success', body: Messages.Field_added});
        this.isSubmitted = false;
      }else {
        this.pubSubService.publishEvent('toastMessage', {severity: 'warning', header: 'Warning', body: Messages.Field_already_exist});
      }
    }else {
      this.pubSubService.publishEvent('toastMessage', {severity: 'warning', header: 'Warning', body: Messages.Select_field});
    }
  }

  removeField(control: any) {
    let index = this.selectedFields.findIndex((val) => {
      return val.name == control.name;
    })
    if(index > -1 && this.projectUpdateForm.contains(control.name)) {
      this.selectedFields.splice(index, 1);
      this.projectUpdateForm.removeControl(control.name);
      this.projectUpdateForm.updateValueAndValidity();
      this.pubSubService.publishEvent('toastMessage', {severity: 'success', header: 'Success', body: Messages.Field_removed});
      this.isSubmitted = false;
    }else {
      this.pubSubService.publishEvent('toastMessage', {severity: 'warning', header: 'Warning', body: Messages.Something_went_wrong});
    }
  }

  submitRequest() {
    if (this.projectUpdateForm.valid) {
      this.isSubmitted = false;
      this.projectDetailsService.updateProjectDetails(this.projectId, this.projectUpdateForm.value).subscribe({
        next: (success) => {
          this.showDetailUpdateForm = false;
          this.pubSubService.publishEvent('toastMessage', {severity: 'success', header: 'Success', body: success.Message});
        }, error: (err) => {
          this.pubSubService.publishEvent('toastMessage', {severity: 'error', header: 'Error', body: err.Message});
        }
      })
    }else {
      this.isSubmitted = true;
    }
  }

  getControl(field: string) {
    return this.projectUpdateForm.get(field) as FormControl;
  }

  // getReports() {
  //   // if (!this.selectedProjects.length) {
  //   //   this.pubSubService.publishEvent('toastMessage', {severity: 'error', header: 'Error', body: Messages.Select_project});
  //   // }else 
  //   if (this.isRangeInvalid()) {
  //     this.pubSubService.publishEvent('toastMessage', {severity: 'warning',header: 'Error',body: Messages.Select_daterange});
  //   }else {
  //     // if (this.selectedProjects.length && this.rangeDates && this.rangeDates[0] && this.rangeDates[1]) {
  //       let obj = {'projectIds': [this.projectId], fromDate:  this.rangeDates[0], toDate: this.rangeDates[1]};
  //       this.reportService.getWeeklyReportList(obj).subscribe({
  //         next: (success: any) => {
  //           this.wReportList = success;
  //         }, error: (err: any) => {
  //           this.pubSubService.publishEvent('toastMessage', {severity: 'error', header: 'Error', body: err.Message});
  //         }
  //       })
  //     // }
  //   }
  // }

  // isRangeInvalid() {
  //   return !this.rangeDates || (this.rangeDates && (!this.rangeDates[0] || !this.rangeDates[1]))
  // }

  // checkRangeValidity() {
  //   if (this.isRangeInvalid()) {
  //     this.pubSubService.publishEvent('toastMessage', {severity: 'warning',header: 'Error',body: Messages.Select_daterange});
  //   }
  // }

  // showWeeklySubmittedReport(report: {name: string, id: string}) {
  //   this.reportService.getReportById(report.id).subscribe({
  //     next: (success) => {
  //       this.updateWeeklyReport(success);
  //     },
  //     error: (err) => {
  //       this.pubSubService.publishEvent('toastMessage', {severity: 'warning', header: 'Warning', body: err.message});
  //     }
  //   })
  // }

  editOtherDetails() {
    this.editMode = true;
  }

  saveOtherDetails() {
    this.editMode = false;
  }

  cancelOtherDetails() {
    this.editMode = false;
  }
}
