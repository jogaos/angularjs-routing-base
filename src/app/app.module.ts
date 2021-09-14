import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentsRegistryComponent } from './students-registry/students-registry.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsHomeComponent } from './students-home/students-home.component';
import { StudentsLoginComponent } from './students-login/students-login.component';

const appRoutes: Routes = [
  { path: '', component: StudentsLoginComponent },
  { path: 'student-registry', component: StudentsRegistryComponent },
  { path: 'student-list', component: StudentsListComponent },
  { path: 'student-home/:identifier', component: StudentsHomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentsRegistryComponent,
    StudentsListComponent,
    StudentsHomeComponent,
    StudentsLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
