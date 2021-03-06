import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { AppointmentService } from '../service/appointment.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogAppointmentComponent } from '../dialog-appointment/dialog-appointment.component';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

courseInformationAppointement :any={};
urlVideoCourse: SafeResourceUrl | undefined;
courseRate:any;
courseRateCounter:any=[];
appointmentid = 9999

accountid:any=localStorage.getItem('IdAccount');
acoountidAppointment :number= parseInt(this.accountid)
courseid:any;
endDate="1997-07-14";
TeacherName: any = [];
appointmentstatus='waiting'

  constructor(private course:CourseService ,public sanitizer:DomSanitizer, public appointment: AppointmentService,private router:Router, private dialog: MatDialog
    ) { 
    this.course.getCourseInformationById().subscribe((result)=>{
      console.log('this.courseInformation');
      this.courseInformationAppointement=result;
      console.log(this.courseInformationAppointement);

      this.urlVideoCourse = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseInformationAppointement[0].coursevideo);      
      this.courseRate = this.courseInformationAppointement[0].courserate;      
      this.courseid=this.courseInformationAppointement[0].courseid;  
 
      for (let index = 0; index <this.courseRate ; index++) {
        this.courseRateCounter[index]='*';
      }

      this.course.getTeacherName().subscribe((resultTeacher) => {
        this.TeacherName = resultTeacher;

      })


    });

  }

  onSubmit(data: any) {

    if(localStorage.getItem('IdAccount')==null)
    {
      this.dialog.open(DialogAppointmentComponent)
    }
    else{
    console.warn(data);
    this.appointment.createAppointment(data);
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
  }

  ngOnInit(): void {

  }


  

    //   console.log('appointment')
    // console.log(this.course.courseid)
    // this.courseInformationAppointement=this.course.getCourseInformationById();
    // console.log('Assin course information')
    // console.log(this.course.getCourseInformationById())

}
