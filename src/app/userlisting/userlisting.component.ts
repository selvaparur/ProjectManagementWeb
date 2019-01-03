import { Component, Input, Output ,EventEmitter} from '@angular/core';

import{UserListing} from '../Entities/userlisting';
import{ProjectsModel} from '../Entities/Projects';
import{TasksModel} from '../Entities/Tasks';
import{UsersModel} from '../Entities/Users';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})

export class UserlistingComponent {

  @Input() listingmodalId: string = 'app-userlisting';
  @Input() userlistings: Array<UserListing> = [];
  @Input() projectsodel : Array<ProjectsModel> = [];
  @Input() tasksmodel : Array<TasksModel> = [];
  @Input() usersmodel : Array<UsersModel> = [];

  //userlistings : Array<UserListing> = [];
    
@Output() selectedvalue = new EventEmitter();

constructor()
{
  
}

radclick(obj)
{  
  var empvalue;
  empvalue =  obj.UserId +"-" + obj.EmployeeId + "-" + obj.FirstName +"-"+ obj.LastName;
  this.selectedvalue.emit(empvalue);
}

  OnNgIinit()
  {
    console.log('ji111');
  }

  radprojectclick(ps)
  {
    var psvalue;
    psvalue =  ps.ProjectId +"-" + ps.ProjectName;
  this.selectedvalue.emit(psvalue);
  }

  radtaskclick(tsks)
  {
    var psvaluetask;
    psvaluetask =  tsks.ParentTaskId +"-" + tsks.ParentTaskName;
  this.selectedvalue.emit(psvaluetask);
  }

}
