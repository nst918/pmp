import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteGuard } from './core/auth/auth-route-guard';

export const routes: Routes = [
  { 
    path: 'my-attendance',
    // canActivate: [AppRouteGuard],
    loadChildren: () => import('./my-attendance/my-attendance.module').then(m => m.MyAttendanceModule) },
  { 
    path: 'projects',
    // canActivate: [AppRouteGuard],
    loadChildren: () => import('./my-project/my-project.module').then(m => m.MyProjectModule) },
  { 
    path: 'report',
    // canActivate: [AppRouteGuard],
    loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
  { 
    path: 'requests',
    // canActivate: [AppRouteGuard],
    loadChildren: () => import('./request/request.module').then(m => m.RequestModule) },
  { 
    path: 'resource-sheet',
    // canActivate: [AppRouteGuard],
    loadChildren: () => import('./resource-sheet/resource-sheet.module').then(m => m.ResourceSheetModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }