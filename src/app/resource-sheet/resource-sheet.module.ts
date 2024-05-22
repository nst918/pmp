import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ResourceSheetComponent } from './resource-sheet.component';
import { RouterModule, Routes } from '@angular/router';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

const routes: Routes= [
  { path: '', component: ResourceSheetComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [ResourceSheetComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    MultiSelectModule,
    DropdownModule,
    TableModule,
    RouterModule.forChild(routes),
    AddEmployeeComponent
  ]
})
export class ResourceSheetModule { }
