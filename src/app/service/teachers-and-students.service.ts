import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TeachersAndStudentsService {
  data:any=[{
    birthofdate: new Date()
  }];
  constructor(private http:HttpClient, private toaster:ToastrService) { }
  getAllTeachers(){
    
    return this.http.get('https://localhost:44363/api/account/getteacher');
  }
  getAllStudents(){
    return this.http.get('https://localhost:44363/api/account/getstudent');

  }
  getCountOfTeachers(){
    return this.http.get('https://localhost:44363/api/account/getNumberTeacher');
  }
  getCountOfStudents(){
    return this.http.get('https://localhost:44363/api/account/getNumberStudent');
  }
  getCountOfCategory(){
    return this.http.get('https://localhost:44363/api/category/getNumberCategory');
  }
  getCountOfCourses(){
    return this.http.get('https://localhost:44363/api/course/getNumbercourse');
  }
  // SearchTeacherByName(obj:any){
  //    return this.http.post('https://localhost:44363/api/account/searchTeacher',obj);
  // }

  SearchTeacherByName(data:any)
    {
      return this.http.post('https://localhost:44363/api/account/searchTeacher/',data);
    
    }
    
  acceptorder(data:any){
  data.EmailFrom='Etreeks@gmail.com';
  data.Password='123etreeks';
  data.textMsg='Accept';
  this.http.post('https://localhost:44363/api/jwt/SendEmail/',data).subscribe(
    (res:any)=>{
  }, err=>{
    });
}
updateAccountStatus(body:any){
 // body.image_path=this.display_image;
  this.http.put('https://localhost:44363/api/account/UpdateAccount/',body).subscribe((res)=>{
    //this.toaster.success('updated succefully')
  }, err=>{
  });
}

sendemailcontact(data:any){
  
  this.http.post('https://localhost:44363/api/jwt/SendEmail/',data).subscribe(
    (res:any)=>{
      debugger;
  }, err=>{
    });
}
deleteteacher(acoountid:number){
  
  this.http.delete('https://localhost:44363/api/account/DeleteAccount/'+acoountid).subscribe((res)=>{
    this.toaster.success('deleted  succefully')   
  },err=>{
    this.toaster.error('something went wrong with deleteing!!')
  }  
  )
 
}
}


