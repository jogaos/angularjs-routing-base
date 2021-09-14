import { Component, OnInit } from '@angular/core';
import { Student } from './../data/student';
import { StudentsService } from './../students.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-home',
  templateUrl: './students-home.component.html',
  styleUrls: ['./students-home.component.css']
})
export class StudentsHomeComponent implements OnInit {

  student: Student;
  studentsSize: Number;

  constructor(private studentsService: StudentsService, private router:Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.student = new Student();
    this.student.identifier = this.activatedRoute.snapshot.params["identifier"];
    this.student = this.studentsService.findOneStudent(this.student.identifier);
  }

  exitHome(){
    this.router.navigate(["/"]);
  }

}
