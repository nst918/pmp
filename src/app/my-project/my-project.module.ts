import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyProjectComponent } from './my-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormFieldErrorModule } from '../shared/components/form-field-error/form-field-error.module';
import { EmployeeDirectoryComponent } from '../shared/components/employee-directory/employee-directory.component';
import { WeeklyReportComponent } from './weekly-report/weekly-report.component';

const routes: Routes= [
  { path: '', component: MyProjectComponent },
  { path: ':id', component: ProjectDetailsComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [MyProjectComponent, ProjectDetailsComponent, WeeklyReportComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ProgressSpinnerModule,
    DynamicDialogModule,
    DialogModule,
    InputNumberModule,
    InputTextModule,
    DropdownModule,
    MultiSelectModule,
    FormFieldErrorModule,
    EmployeeDirectoryComponent

  ]
})
export class MyProjectModule { }
