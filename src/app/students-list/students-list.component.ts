import { Component, OnInit } from '@angular/core';
import { Student } from './../data/student';
import { StudentsService} from './../students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  studentList:Student[];
  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.studentList = this.studentsService.getStudents();
  }

}
