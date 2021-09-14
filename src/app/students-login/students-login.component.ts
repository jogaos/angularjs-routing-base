import { Component, OnInit } from '@angular/core';
import { Student } from './../data/student';
import { StudentsService } from './../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-login',
  templateUrl: './students-login.component.html',
  styleUrls: ['./students-login.component.css']
})
export class StudentsLoginComponent implements OnInit {

  student: Student;

  constructor(private studentsService: StudentsService, private router:Router) {
  }

  ngOnInit(): void {
    this.student = new Student();
  }

  searchStudent() {
    let createdNewStudent:boolean = this.studentsService.searchStudent(this.student.identifier);

    if (createdNewStudent) {
      this.router.navigate(["/student-home",this.student.identifier]);
    } else {
      alert("Estudiante no registrado.");
    }
  }

}
