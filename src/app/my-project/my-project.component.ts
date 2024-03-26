import { Component, Injector, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';
import { appModuleAnimation } from '../shared/animations/routerTransition';
import { ProjectDetailsService } from './project-details.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { rolePermission } from '../core/constants/constants';
import { Router } from '@angular/router';
import { CommonService } from '../shared/services/common.service';

@Component({
  templateUrl: './my-project.component.html',
  animations: [appModuleAnimation()],
  styles: ``
})

export class MyProjectComponent implements OnInit {
  empRole: string=  rolePermission.PM;
  selectedCols: Array<{}>= [];
  empCols = [
    { field: 'name', header: 'Project Name' },
    { field: 'manager', header: 'Manager' },
    { field: 'teamSize', header: 'Team Size' },
    { field: 'phase', header: 'Phase' },
    { field: 'allocation', header: 'Allocation' }
  ];
  managerCols = [
    { field: 'code', header: 'Project Code' },
    { field: 'client', header: 'Client Name' },
    { field: 'name', header: 'Project Name' },
    { field: 'phase', header: 'Phase' },
    { field: 'teamSize', header: 'Team Size' },
  ];
  pmoCols = [
    { field: 'code', header: 'Project Code' },
    { field: 'client', header: 'Client Name' },
    { field: 'name', header: 'Project Name' },
    { field: 'phase', header: 'Phase' },
    { field: 'project_start_date', header: 'Project Start Date' },
    { field: 'project_end_date', header: 'Project End Date' },
    { field: 'issue_date', header: 'Issue Date' },
    { field: 'projected_hours', header: 'Projected Hours' },
    { field: 'actual_hours', header: 'Actual Hours' },
    { field: 'onsite_manager', header: 'Onsite Manager' },
    { field: 'offsite_manager', header: 'Offsite Manager' },
  ];
  myProjects = [
    {id: 1, code: 'p1', name: 'ABC', project_start_date: '16/04/24', project_end_date: '16/11/24', issue_date: '01/04/24', projected_hours: '3500', actual_hours: '3000', onsite_manager: 'abcd', offsite_manager: 'xyzz', manager: 'XYZ', client: 'XYZ', teamSize: 8, phase: 'testing', allocation: '60%'},
    {id: 2, code: 'p2', name: 'ABC', project_start_date: '16/04/24', project_end_date: '16/11/24', issue_date: '01/04/24', projected_hours: '3500', actual_hours: '3000', onsite_manager: 'abcd', offsite_manager: 'xyzz', manager: 'XYZ', client: 'XYZ', teamSize: 8, phase: 'testing', allocation: '60%'},
    {id: 3, code: 'p3', name: 'ABC', project_start_date: '16/04/24', project_end_date: '16/11/24', issue_date: '01/04/24', projected_hours: '3500', actual_hours: '3000', onsite_manager: 'abcd', offsite_manager: 'xyzz', manager: 'XYZ', client: 'XYZ', teamSize: 8, phase: 'testing', allocation: '60%'},
    {id: 4, code: 'p4', name: 'ABC', project_start_date: '16/04/24', project_end_date: '16/11/24', issue_date: '01/04/24', projected_hours: '3500', actual_hours: '3000', onsite_manager: 'abcd', offsite_manager: 'xyzz', manager: 'XYZ', client: 'XYZ', teamSize: 8, phase: 'testing', allocation: '60%'},
    {id: 5, code: 'p5', name: 'ABC', project_start_date: '16/04/24', project_end_date: '16/11/24', issue_date: '01/04/24', projected_hours: '3500', actual_hours: '3000', onsite_manager: 'abcd', offsite_manager: 'xyzz', manager: 'XYZ', client: 'XYZ', teamSize: 8, phase: 'testing', allocation: '60%'},
    {id: 6, code: 'p6', name: 'ABC', project_start_date: '16/04/24', project_end_date: '16/11/24', issue_date: '01/04/24', projected_hours: '3500', actual_hours: '3000', onsite_manager: 'abcd', offsite_manager: 'xyzz', manager: 'XYZ', client: 'XYZ', teamSize: 8, phase: 'testing', allocation: '60%'},
    {id: 7, code: 'p7', name: 'ABC', project_start_date: '16/04/24', project_end_date: '16/11/24', issue_date: '01/04/24', projected_hours: '3500', actual_hours: '3000', onsite_manager: 'abcd', offsite_manager: 'xyzz', manager: 'XYZ', client: 'XYZ', teamSize: 8, phase: 'testing', allocation: '60%'}
  ];

  ref: DynamicDialogRef | undefined;

  constructor(
    injector: Injector,
    private projectDetailsService: ProjectDetailsService,
    private commonService: CommonService,
    private fb: FormBuilder,
    private router: Router,
    public dialogService: DialogService
  ) { 
    this.getEmpValue();
  }

  showProjectDetails(data: any) {
    if (this.empRole == rolePermission.EMP) {
      this.ref = this.dialogService.open(ProjectDetailsComponent, { 
        header: data['name'],
        width: '80vw',
        data: {projectId: data['id']}
      });
    }else {
      this.router.navigate(['/', 'projects', data['id']]);
    }
  }

  ngOnInit(): void {
    this.getMyProjects();
  }

  getMyProjects() {
    this.projectDetailsService.getMyProjects().subscribe({
      next: (success) => {
        console.log("success => ", success);
      },
      error: (err) => {
        console.log("Err => ", err);
      },
    })
  }

  getEmpValue() {
    switch (this.empRole) {
      case rolePermission.EMP:
        this.selectedCols = this.empCols;
        break;
      case rolePermission.PM:
        this.selectedCols = this.managerCols;
        break;
      default:
        this.selectedCols = this.pmoCols;
        break;
    }
    this.commonService.setRole(this.empRole);
  }
}
