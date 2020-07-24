import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { StudentListModule } from '../../components/student-list/student-list.module';
import { InstructorStudentListPageComponent } from './instructor-student-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: InstructorStudentListPageComponent,
  },
];

/**
 * Module for instructor student list page.
 */
@NgModule({
  declarations: [
    InstructorStudentListPageComponent,
  ],
  exports: [
    InstructorStudentListPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StudentListModule,
    NgbCollapseModule,
    LoadingSpinnerModule,
  ],
})
export class InstructorStudentListPageModule { }
