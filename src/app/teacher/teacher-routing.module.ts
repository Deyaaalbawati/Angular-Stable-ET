import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from '../appointment/appointment.component';
import { AppointmentTeacherComponent } from './appointment-teacher/appointment-teacher.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { NotAcceptTeacherComponent } from './not-accept-teacher/not-accept-teacher.component';
import { TeacherMapComponent } from './teacher-map/teacher-map.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { WaitingTeacherComponent } from './waiting-teacher/waiting-teacher.component';


const routes: Routes = [
  {
    path: 'teacherDashboard',
    component: TeacherdashboardComponent
  },
  {
    path: 'appointment',
    component: AppointmentTeacherComponent
  },
  {
    path: 'teacherMap',
    component: TeacherMapComponent
  },
  {
    path: 'manageCourse',
    component: ManageCoursesComponent
  },
  {
    path: 'teacherUpdateProfile',
    component: TeacherProfileComponent
  },
  {
    path:'rejectTeacher',
    component:NotAcceptTeacherComponent
  },
  {
    path:'waitingTeacher',
    component: WaitingTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule],

  exports: [HttpClientModule,FormsModule]
})
export class TeacherRoutingModule { }
