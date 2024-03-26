import { Component, Injector, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';
import { appModuleAnimation } from '../shared/animations/routerTransition';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MyAttendanceService } from './my-attendance.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { AtendanceData, convertDateStringToDdMmYyyy } from './dummy-data'
declare const $:any;

@Component({
  templateUrl: './my-attendance.component.html',
  animations: [appModuleAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .legend span {
      border: 1px solid #ccc;
      float: left;
      width: 12px;
      height: 12px;
      margin: 6px 2px;
    }
    .legend {
      list-style: none;
    }
    .legend li {
      float: left;
      margin-right: 10px;
    }
  `
})
export class MyAttendanceComponent implements OnInit {
  @ViewChild('fullCalendar') fullCalendar: any;
  avgWorkingHours: string= '0.00';
  attendanceData = AtendanceData;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    firstDay: 1,
    initialView: 'dayGridMonth',
    headerToolbar: {
      right: 'prev,next',
      center: '',
      // right: 'dayGridYear,dayGridWeek,dayGridDay'
    },
    // lazyFetching: true,
    // weekends: false,
    // dayMaxEventRows: 2,
    events: []
  };

  dateForm: FormGroup;
  maxDate: Date = new Date();
  
  constructor(
    injector: Injector, 
    private myAttendance: MyAttendanceService,
    private fb: FormBuilder
    ) {
      this.dateForm = this.fb.group({
        startDate: [''],
        endDate: [''],
        employeeId: ['']
      });
      this.resetForm();
    }

    resetForm() {
      let currentDate = new Date();
      currentDate.setDate(1);
      this.dateForm.controls['startDate'].setValue(currentDate);
      this.dateForm.controls['endDate'].setValue(new Date());
      this.dateForm.controls['employeeId'].setValue('0');
    }


  ngOnInit(): void {
    this.getAttendance();
  }
  
  getAttendance() {
    this.myAttendance.getAttendance(this.dateForm.value).subscribe({
      next: (success)=> {
        console.log("success => ", success);
        this.fullCalendar.calendar.setOption('events', this.attendanceData);
      },
      error: (err)=> {
        console.log("Err => ", err);
        this.fullCalendar.calendar.setOption('events', this.attendanceData);
        // this.fullCalendar.calendar.prev();
        // this.fullCalendar.calendar.next();
      },
    })
  //   $.ajax({
  //     type: "POST",
  //     contentType: "application/json",
  //     data: JSON.stringify({
  //         startDate: '01/02/2024',
  //         endDate: '22/02/2024',
  //         employeeId: 0
  //     }),
  //     url: 'https://hrms.svamindia.com/Attendance/Attendance/GetAttendance' ,// "Attendance.aspx/GetAttendance",
  //     dataType: "json",
  //     success: function (data) {
  //       console.log("data");
  //       console.log(data);
  //         // $("#lblAverageTime").text(data.AverageAttendance);
  //         // var jsonEvents = JSON.stringify(data.AttendanceEvents);
  //         // var events = JSON.parse(jsonEvents);
  //         // $('#calendar').fullCalendar('removeEvents');
  //         // $('#calendar').fullCalendar('addEventSource', events);
  //         // $('#calendar').fullCalendar('refetchEvents');
  //         // var fromDateParts = document.getElementById('txtFrom').value.split('/');
  //         // var calendarStartDate = fromDateParts[2] + "-" + fromDateParts[1] + "-" + fromDateParts[0];
  //         // $('#calendar').fullCalendar('gotoDate', calendarStartDate);
  //     },
  //     error: function (XMLHttpRequest, textStatus, errorThrown) {
  //         // toastr.error(errorThrown);
  //         console.log("textStatus, errorThrown");
  //         console.log(textStatus, errorThrown);
  //     }
  // });
  }

  getDate($event: any, val: any) {
    this.dateForm.controls[val].setValue(convertDateStringToDdMmYyyy($event));
  }
}
