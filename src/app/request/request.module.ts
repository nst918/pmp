import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from './request.component';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

const routes: Routes= [
  { path: '', component: RequestComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [RequestComponent],
  providers: [ ConfirmationService ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    TabViewModule,
    PanelModule,
    ConfirmDialogModule
  ]
})
export class RequestModule { }
