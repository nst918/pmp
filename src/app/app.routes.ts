import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyAttendanceComponent } from './my-attendance/my-attendance.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { ProjectDetailsComponent } from './my-project/project-details/project-details.component';
import { ReportComponent } from './report/report.component';

export const routes: Routes = [
  { path: 'my-attendance', loadChildren: () => import('./my-attendance/my-attendance.module').then(m => m.MyAttendanceModule) },
  { path: 'projects', loadChildren: () => import('./my-project/my-project.module').then(m => m.MyProjectModule) },
  { path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
  { path: 'requests', loadChildren: () => import('./request/request.module').then(m => m.RequestModule) },
  { path: 'resource-sheet', loadChildren: () => import('./resource-sheet/resource-sheet.module').then(m => m.ResourceSheetModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }