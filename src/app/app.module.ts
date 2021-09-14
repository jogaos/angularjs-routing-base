import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentsRegistryComponent } from './students-registry/students-registry.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsHomeComponent } from './students-home/students-home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsRegistryComponent,
    StudentsListComponent,
    StudentsHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
