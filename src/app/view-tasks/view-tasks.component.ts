import { Component, OnInit } from '@angular/core';
import{TasksModel} from '../Entities/Tasks';
import{FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import{ProjectsModel} from '../Entities/Projects';
import{Router} from '@angular/router';
import{TaskService} from '../services/task.service';
import{ProjectService} from '../services/project.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {

  viewtaskform : FormGroup;
  tasksmodel : Array<TasksModel> = [];
  sortBy: string;
  endtaskid : number;
  projectsmodelpop : Array<ProjectsModel> = [];
  endtasksmodel : TasksModel ;

  constructor(private _formBuilder: FormBuilder,
    private _route : Router,
    private _taskService : TaskService,
    private _projectService : ProjectService
  ) { }

  ngOnInit() {

    this.viewtaskform = this._formBuilder.group({
      projectname : ['']
    });

    this.loadTasks();
    this.getAllProjects();

    console.log(document.getElementsByTagName('tbody').item.length);
  }
  private getTime(date?: Date) {
    return date != null ? new Date(date).getTime() : 0;
  }

  edittask(task: TasksModel) {  
    console.log('task id for edit ' + task.TaskId);
  this._route.navigate(['add-edit-task/'+task.TaskId]);
  }

  selectedprojectpop(selecps)
  {
    console.log('selected project '  + selecps);
    this.viewtaskform.patchValue({
      projectname:selecps.split('-')[1]
    });
  }
  

  loadTasks()
{
  // call api to get all the tasks
  this._taskService.getAll().subscribe((data: Array<TasksModel>) => {
    this.tasksmodel = data;
  });

}
get f() { return this.viewtaskform.controls; }

getAllProjects()
  {

    this._projectService.getAll().subscribe((data: Array<ProjectsModel>) => {
      this.projectsmodelpop = data;
    });

  }

endtask(tm: TasksModel)
{
  this.endtasksmodel=tm;    
}

isCompleted(tm: TasksModel,intt) {
  if (tm === null) { return false; }
if(tm.Status === 'Yes')
{
  console.log('count ' + intt)
//  if(!isNaN(intt))
//  {
//   var tableRef = document.getElementById('idvietask').getElementsByTagName('tbody'); 
//   let i;
//   for(i = 0; tableRef.length ; i++)
//   {
// if(i == intt)
// {
//   tableRef[i].classList.add('bgggg');
// }
//   }
// }
  
  // var tds = document.querySelectorAll('tbody td').item(0).classList.add('bgggg');
  // var tds = document.querySelectorAll('tbody td').item(1).classList.add('bgggg');
  // var tds = document.querySelectorAll('tbody td').item(2).classList.add('bgggg');
  // var tds = document.querySelectorAll('tbody td').item(3).classList.add('bgggg');
  // var tds = document.querySelectorAll('tbody td').item(4).classList.add('bgggg');
  // var tds = document.querySelectorAll('tbody td').item(5).classList.add('bgggg');
  // var tds = document.querySelectorAll('tbody td').item(6).classList.add('bgggg');  
  

}

  return (tm.Status === 'Yes');
}

warningresultendtask(endtsk)
{
  console.log('end task call ' + this.endtasksmodel.TaskId);
  if(endtsk ='yes')
  {
    this._taskService.completeTask(this.endtasksmodel).subscribe((data: Array<TasksModel>) => {
      this.tasksmodel = data;
    });
  }
}

handleSortBy(value) {
  this.sortBy = value;

  switch (this.sortBy) {
    case 'startDate':
      this.tasksmodel = this.tasksmodel.sort((a, b) => {
        return this.getTime(a.StartDate) - this.getTime(b.StartDate);
      });
      break;
    case 'endDate':
      this.tasksmodel = this.tasksmodel.sort((a, b) => {
        return this.getTime(a.EndDate) - this.getTime(b.EndDate);
      });
      break;
    case 'completed':
      this.tasksmodel = this.tasksmodel.sort((a, b) => a.Status.localeCompare(b.Status));
      break;
    case 'priority':
      this.tasksmodel = this.tasksmodel.sort((a, b) => a.Priority.toString().localeCompare(b.Priority.toString()));
      break;
    default:
      this.tasksmodel = this.tasksmodel.sort((a, b) => a.ProjectName.localeCompare(b.ProjectName));
      break;
  }
}

}
