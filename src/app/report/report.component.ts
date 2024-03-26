import { Component, OnInit } from '@angular/core';
import { appModuleAnimation } from '../shared/animations/routerTransition';
import { ProjectSummaryIQMSDto } from '../core/models/api-status';
import { NgxPubSubService } from '@pscoped/ngx-pub-sub';
import { ReportService } from '../shared/services/report.service';
import { Messages } from '../core/messages/messages';
import { rolePermission } from '../core/constants/constants';
import { CommonService } from '../shared/services/common.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { WeeklyReportComponent } from '../my-project/weekly-report/weekly-report.component';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  animations: [appModuleAnimation()]
})

export class ReportComponent implements OnInit {

  rolePermission = rolePermission;
  selectedProjects: Array<string> = []
  projectsList: Array<{}> = [
    {projectId: 'p1', name: 'LivaNova'},
    {projectId: 'p2', name: 'SCA'},
    {projectId: 'p3', name: 'Multiplier'},
    {projectId: 'p4', name: 'DOE Askfood-BOH'},
    {projectId: 'p5', name: 'DOE Askfood-AA'},
    {projectId: 'p6', name: 'DOE Askfood-WHAM'},
    {projectId: 'p7', name: 'Protrack'}
  ];
  rangeDates: Date[];
  tillDate: Date = new Date();
  maxDate: Date = new Date();
  reportData: Array<ProjectSummaryIQMSDto>= [];
  wReportData: Array<{projectName: string, reports: Array<{name: string, id: string}>}>= [
    {projectName: 'SCA', reports: [
      {id: 'P1R1', name: 'Submitted on 02 Feb 2024'},
      {id: 'P1R2', name: 'Submitted on 12 Feb 2024'},
      {id: 'P1R3', name: 'Submitted on 22 Feb 2024'},
    ]},
    {projectName: 'TKS', reports: [
      {id: 'P2R1', name: 'Submitted on 02 Feb 2024'},
      {id: 'P2R2', name: 'Submitted on 12 Feb 2024'},
      {id: 'P2R3', name: 'Submitted on 22 Feb 2024'},
    ]},
  ];
  refComp: DynamicDialogRef | undefined;
  

  columns = [
    { field: 'ClientName', header: 'Client Name' },
    { field: 'ProjectName', header: 'Project Name' },
    { field: 'OnsitePM', header: 'Onsite PM' },
    { field: 'OffshorePM', header: 'Offshore PM' },
    { field: 'CurrentPhase', header: 'Current Phase' },
    { field: 'Scope', header: 'Scope' },
    { field: 'Schedule', header: 'Schedule' },
    { field: 'Effort', header: 'Effort' },
    { field: 'ProjectStatusSummary', header: 'Project Status Summary' },
    { field: 'ProjectStartDate', header: 'Project Start Date' },
    { field: 'PlanGoLiveDate', header: 'Plan Go Live Date' },
    { field: 'ActualGoLiveDate', header: 'Actual Go Live Date' },
    { field: 'PlannedEffort', header: 'Planned Effort' },
    { field: 'ActualEffortInception', header: 'Actual Effort Inception' },
    { field: 'EstimationToComplete', header: 'Estimation To Complete' },
    { field: 'EtcDate', header: 'Etc Date' },
    { field: 'ExpectedAtCompletion', header: 'Expected At Completion' },
    { field: 'Variance', header: 'Variance' },
    { field: 'AvgExp', header: 'AvgExp' },
    { field: 'Remarks', header: 'Remarks' }
  ];

  constructor(
    private reportService: ReportService,
    private commonService: CommonService,
    private dialogService: DialogService,
    public pubSubService: NgxPubSubService
  ) { }

  ngOnInit(): void { }

  getRole() {
    return this.commonService.getRole();
  }

  getReports() {
    if (!this.selectedProjects.length) {
      this.pubSubService.publishEvent('toastMessage', {severity: 'error', header: 'Error', body: Messages.Select_project});
    }else {
      if (this.getRole() == this.rolePermission.PMO) {
        let obj = {'projectIds': this.selectedProjects, tillDate: this.tillDate};
        this.reportService.getWeeklyReportPMO(obj).subscribe({
          next: (success: any) => {
            this.wReportData = success;
          }, error: (err: any) => {
            this.pubSubService.publishEvent('toastMessage', {severity: 'error', header: 'Error', body: err.Message});
          }
        })
      }else {
        if (this.isRangeInvalid()) {
          this.pubSubService.publishEvent('toastMessage', {severity: 'warning',header: 'Error',body: Messages.Select_daterange});
        }else {
          if (this.selectedProjects.length && this.rangeDates && this.rangeDates[0] && this.rangeDates[1]) {
            let obj = {'projectIds': this.selectedProjects, fromDate:  this.rangeDates[0], toDate: this.rangeDates[1]};
            this.reportService.getWeeklyReportPMO(obj).subscribe({
              next: (success: any) => {
                this.reportData = success;
              }, error: (err: any) => {
                this.pubSubService.publishEvent('toastMessage', {severity: 'error', header: 'Error', body: err.Message});
              }
            })
          }
        }
      }
    }
  }

  isRangeInvalid() {
    return !this.rangeDates || (this.rangeDates && (!this.rangeDates[0] || !this.rangeDates[1]))
  }

  checkRangeValidity() {
    if (this.isRangeInvalid()) {
      this.pubSubService.publishEvent('toastMessage', {severity: 'warning',header: 'Error',body: Messages.Select_daterange});
    }
  }

  downloadExcel() {
    
  }
  
  showWeeklySubmittedReport(report: any) {
    if (this.refComp) {
      this.refComp.destroy();
    }
    let obj: any = {};
    if (report) {
      obj['reportDetail'] = report;
    }

    this.refComp = this.dialogService.open(WeeklyReportComponent, { 
      header: 'Update',
      width: '70vw',
      data: obj
    });
  }
}
