import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { studentVM } from './student.model';
import { Observable } from 'rxjs/observable';

@Injectable()
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudents():Observable<Array<studentVM>>{
  return this.http.get('http://localhost:4200/assets/dummy.json').map((res:any) => res)
  }

}
