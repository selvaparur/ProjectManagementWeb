import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddEditProjectsComponent} from '../app/add-edit-projects/add-edit-projects.component';
import{AddEditUsersComponent} from '../app/add-edit-users/add-edit-users.component'
import {AddTasksComponent} from '../app/add-tasks/add-tasks.component';
import{ViewTasksComponent} from '../app/view-tasks/view-tasks.component';

const routes: Routes = [
  {'path':'add-edit-projects', component : AddEditProjectsComponent},  
  {'path': 'add-users',component:AddEditUsersComponent},  
  {'path':'add-edit-task/:id', component : AddTasksComponent},
  {'path':'view-task', component : ViewTasksComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
