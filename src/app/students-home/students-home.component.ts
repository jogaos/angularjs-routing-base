import { Component, OnInit } from '@angular/core';
import { Student } from './../data/student';
import { StudentsService } from './../students.service';

@Component({
  selector: 'app-students-home',
  templateUrl: './students-home.component.html',
  styleUrls: ['./students-home.component.css']
})
export class StudentsHomeComponent implements OnInit {

  student: Student;
  studentsSize: Number;

  constructor(private studentsService: StudentsService) {
  }

  ngOnInit(): void {
    this.student = new Student();
    this.student.name = "Prueba";
    this.student.lastName = "89";
  }

}
