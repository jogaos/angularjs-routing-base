import { Injectable } from '@angular/core';
import { Student } from "./data/student"

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students: Student[];

  constructor() {
    this.students = [];
  }

  getStudents() {
    return this.students;
  }

  setNewStudent(newStudent: Student): boolean {
    let studentsResult = this.students.filter(x => x.identifier == newStudent.identifier);
    let studentExist = studentsResult.length == 0;

    if (studentExist) {
      this.students.push(newStudent);
    }

    return studentExist;
  }

  searchStudent(studentIdentifier: String): boolean {
    let studentsResult = this.students.filter(x => x.identifier == studentIdentifier);
    let studentExist = studentsResult.length == 1;
    
    return studentExist;
  }
}
