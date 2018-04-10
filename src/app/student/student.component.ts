import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { studentVM } from './student.model';
import {StudentService} from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[StudentService]
})
export class StudentComponent implements OnInit {
studentList:Array<studentVM>=[];
  constructor(private http:HttpClient, private studentService:StudentService) {
  }
search:string = '';
  ngOnInit() {
    this.getStudentData()
  }
  getStudentData():void{
   this.studentService.getStudents().subscribe(
     res => this.studentList = res,
     err => console.log(err)
   )
  }


}
