import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../service/course.service';
import { HomeService } from '../service/home.service';
import { SearchTeacherService } from '../service/search-teacher.service';

@Component({
  selector: 'app-teacher-course',
  templateUrl: './teacher-course.component.html',
  styleUrls: ['./teacher-course.component.css']
})
export class TeacherCourseComponent implements OnInit {

  currentMsgToParent = '';

  Allcourse: any = {}
  Teacherid: any;
  TeacherName:any=[];
  TeacherById:any =[];
  
  constructor(private courseAPI: HomeService, private http: HttpClient, private courseSerice: CourseService, private search: SearchTeacherService, private router: Router) {
    this.Teacherid =localStorage.getItem('IdTeacherSearch');

    this.http.get('https://localhost:44363/api/course/GetCourseByTeacherId/'+this.Teacherid).subscribe((result) => {

      this.Allcourse = result;
      console.log('Allllllllll Course 1111111 ')

      console.log(this.Allcourse);
    })
    this.courseSerice.getTeacherName().subscribe((resultTeacher) => {
      this.TeacherName = resultTeacher;
  })

  this.http.get('https://localhost:44363/api/Account/GetTeacherById/'+this.Teacherid).subscribe((result) => {

    this.TeacherById = result;

console.log('Teacherrrrrrrrrrrrrrrrrrrrr')
    console.log(this.TeacherById);
  })
}

getCourseId(id: any) {
  this.courseSerice.getCourseId(id);
  this.router.navigate(['appointment']);
}



  ngOnInit(): void {
  }

}
