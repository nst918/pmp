import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAttendanceComponent } from './my-attendance.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MyAttendanceComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [MyAttendanceComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MyAttendanceModule { }
