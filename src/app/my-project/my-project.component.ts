import { Component, OnInit } from '@angular/core';
import { appModuleAnimation } from '../shared/animations/routerTransition';
import { ProjectDetailsService } from './project-details.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { Constants, empCols, managerCols, myDummyProjects, pmoCols, rolePermission } from '../core/constants/constants';
import { Router } from '@angular/router';
import { CommonService } from '../shared/services/common.service';
import { StorageProvider } from '../core/http/storage-service';

@Component({
  templateUrl: './my-project.component.html',
  animations: [appModuleAnimation()],
  styles: ``
})

export class MyProjectComponent implements OnInit {
  empRole: string=  rolePermission.PM;
  empDetails: any;
  selectedCols: Array<{}>= [];
  empCols: Array<{}> = empCols;
  managerCols: Array<{}> = managerCols;
  pmoCols: Array<{}> = pmoCols;
  myProjects: Array<{}> = myDummyProjects;

  ref: DynamicDialogRef | undefined;

  constructor(
    private projectDetailsService: ProjectDetailsService,
    private storageProvider: StorageProvider,
    private commonService: CommonService,
    private router: Router,
    public dialogService: DialogService
  ) { 
    this.getEmpValue();
    this.empDetails = this.storageProvider.getSessionStorageData(Constants.CurrentUser);
  }

  showProjectDetails(data: any) {
    if (this.empRole == rolePermission.EMP) {
      this.ref = this.dialogService.open(ProjectDetailsComponent, { 
        header: data['name'],
        width: '80vw',
        data: {projectId: data['id']}
      });
    }else {
      this.router.navigate(['/', 'projects', data['pinId']]);
    }
  }

  ngOnInit(): void {
    this.getMyProjects();
  }

  getMyProjects() {
    if (this.commonService.getProjectList().length) {
      this.myProjects = this.commonService.getProjectList();
    }else {
      this.commonService.getUserProjects(this.empDetails.id).subscribe({
        next: (success) => {
          // console.log("success => ", success);
          this.myProjects = success.data;
          this.commonService.setProjectList(success.data);
        },
        error: (err) => {
          console.log("Err => ", err);
        },
      })
    }
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
