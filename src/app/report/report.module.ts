import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ReportComponent } from './report.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';

const routes: Routes= [
  { path: '', component: ReportComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    TableModule,
    CalendarModule,
    MultiSelectModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ReportModule { }
