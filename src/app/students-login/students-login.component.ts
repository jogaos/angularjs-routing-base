import { Component, OnInit } from '@angular/core';
import { Student } from './../data/student';
import { StudentsService } from './../students.service';

@Component({
  selector: 'app-students-login',
  templateUrl: './students-login.component.html',
  styleUrls: ['./students-login.component.css']
})
export class StudentsLoginComponent implements OnInit {

  student: Student;

  constructor(private studentsService: StudentsService) {
  }

  ngOnInit(): void {
    this.student = new Student();
  }

  searchStudent() {
    let createdNewStudent:boolean = this.studentsService.searchStudent(this.student.identifier);

    if (createdNewStudent) {
      alert("Estudiante ya registrado.");
    } else {
      alert("Estudiante no registrado.");
    }
  }

}
