import { Component, OnInit } from '@angular/core';
import { Student } from './../data/student';
import { StudentsService } from './../students.service';

@Component({
  selector: 'app-students-registry',
  templateUrl: './students-registry.component.html',
  styleUrls: ['./students-registry.component.css']
})
export class StudentsRegistryComponent implements OnInit {

  student: Student;
  studentsSize: Number;

  constructor(private studentsService: StudentsService) {
  }

  ngOnInit(): void {
    this.student = new Student();
    this.studentsSize = this.studentsService.getStudents().length;
  }

  saveNewStudent() {
    let createdNewStudent:boolean = this.studentsService.setNewStudent(this.student);

    if (createdNewStudent) {
      this.student = new Student();
      this.studentsSize = this.studentsService.getStudents().length;
    } else {
      alert("El carnet ingresado ya existe. Intente de nuevo.");
    }
  }

}
