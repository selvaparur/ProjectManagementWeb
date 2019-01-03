import { Component, OnInit } from '@angular/core';
import{ProjectsModel} from '../Entities/Projects';
import{TasksModel} from '../Entities/Tasks';
import{UserListing} from '../Entities/userlisting';
import{FormBuilder, FormGroup, FormControl, Validators}from '@angular/forms';
import{ActivatedRoute, Router} from '@angular/router';
import{ProjectService} from '../services/project.service';
import{TaskService} from '../services/task.service';
import{UsersModel} from '../Entities/Users';
import {AppSettings} from '../Entities/AppSettings';
import { DatePipe } from '@angular/common';

const controlNames: string[] = ['priority', 'startdate', 'enddate'];

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css'],
  providers: [DatePipe, ProjectService]
})
export class AddTasksComponent implements OnInit {

  taskform: FormGroup;

  projectsmodelpop : Array<ProjectsModel> = [];
  tasksmodels : Array<TasksModel> = [];
  userlists : Array<UserListing> = [];
  userslists : Array<UsersModel> = [];
  submitted = false;
  priority: number;
  isParentTask: boolean;
  disabtaskbutton: boolean;
  addtasktitle = 'Add Task';
  

  constructor(private fb: FormBuilder, private _activatedRoute: ActivatedRoute,
  private _ProjectService : ProjectService, private _taskService : TaskService,
  private _datePipe: DatePipe) { }

  ngOnInit() {

    this.taskform= this.fb.group({

    taskid: [0],
    taskname:['', Validators.required],
     projectid:[0],
     projectname:['',Validators.required],
    isparenttask:[false],
    priority:[0],
    parenttaskid:[0],
    parenttaskname:[''],
    startdate:[null],
    status:[null],
    enddate:[null],
    managername:[''],
    managerid:[0]

    });

    this.getprojectspopup();
   this.getparenttaskspopup();
   this.selectusespopup();

   // edit task   
   this._activatedRoute.paramMap.subscribe(pm => {
console.log('recevied param value from view task screen is ' + pm.get('id'));
const taskidup =+pm.get('id');
if(taskidup > 0){
// call api to get the data

this.getTaskById(taskidup);

document.getElementById('addtask').style.background = '#AD9AE9';
  document.getElementById('addtask').style.border = '1px transparent solid';
  document.getElementById('addtask').style.borderRadius='9px';
  document.getElementById('addtask').style.color='white'; 
  document.getElementById('addtask').style.boxShadow='0px -1px 13px 6px white'; 

  document.getElementById('viewtask').style.background = '';
      document.getElementById('viewtask').style.border = '';
      document.getElementById('viewtask').style.borderRadius='';  
      document.getElementById('viewtask').style.boxShadow='';  
      
      document.getElementById('blicktext').classList.add('blink_me');
      this.addtasktitle = 'Update Task';

}
   });
  }

  getTaskById(id: number) {    
    this._taskService.getById(id).subscribe((p) => {   
      this.patchModel(p);
      this.priority = p.Priority;
      this.setStartAndEndDate(p.StartDate, p.EndDate);
    });
  }

  setStartAndEndDate(start: Date, end: Date) {
    const formattedTodayDate = this._datePipe.transform(start, AppSettings.IsoDateFormat).toString();
    const formattedTomorrowDate = this._datePipe.transform(end, AppSettings.IsoDateFormat).toString();
    this.taskform.patchValue({ startdate: formattedTodayDate, enddate: formattedTomorrowDate });
  }

  patchModel(t: TasksModel) {
    this.taskform.patchValue({
      taskid: t.TaskId,
      taskname: t.TaskName,
      projectid: t.ProjectId,
      projectname: t.ProjectName,
      isparenttask: (t.StartDate == null),
      priority: t.Priority,
      parenttaskid: t.ParentTaskId,
      parenttaskname: t.ParentTaskName,
      startdate: t.StartDate,
      enddate: t.EndDate,
      managerid: t.ManagerId,
      managername: t.ManagerName
    });
  }

  selectusespopup()
  {

    this._ProjectService.getAllManagers().subscribe((data: Array<UsersModel>) => {
      this.userslists = data;
    });

  }

  getprojectspopup()
  {    

    this._ProjectService.getAll().subscribe((data: Array<ProjectsModel>) => {
      this.projectsmodelpop = data;      
    });

  }

getparenttaskspopup()
{

this._taskService.getAllParentTasks().subscribe((data: Array<TasksModel>) => {
  this.tasksmodels = data;
});

}

get f(){return this.taskform.controls;}


  selectedprojectpop(selecps)
  {
    console.log('selected project '  + selecps);
    this.taskform.patchValue({
      projectname:selecps.split('-')[1],
      projectid : selecps.split('-')[0]
    });

    console.log('selected project id ' + this.taskform.value.projectid);
  }

  selectedtaskpop(seltaks)
  {
    console.log(seltaks);
    this.taskform.patchValue({
      parenttaskname:seltaks.split('-')[1],
      parenttaskid : seltaks.split('-')[0]
    });
    console.log('selected task id '+this.taskform.value.parenttaskid);
  }

  selecteduser(seleuser)
  {
console.log(seleuser);
this.taskform.patchValue({
  managername : seleuser.split('-')[2] + ' ' +seleuser.split('-')[3],
  managerid :  seleuser.split('-')[0]
});

console.log('selected user id ' +this.taskform.value.managerid);

  }

  onsave()
  {
    this.submitted = true;
    if(this.taskform.invalid){return}

    const sd = Date.parse(this.taskform.value.startdate);
    const ed = Date.parse(this.taskform.value.enddate);

    if(!isNaN(sd) && !isNaN(ed))
    {
    if (ed <= sd) {
      console.log('date validation fails');
      document.getElementById('mandmaindiv').style.visibility = 'visible';      
      return;
    }
  }

  if(this.taskform.valid)
  {
    //document.getElementById('mandmaindiv').style.visibility = 'hidden';
  }
    // api call to save the data in db.
    console.log('save called');    
    console.log('button title ' + this.addtasktitle)

    // add
    if(this.addtasktitle == 'Add Task'){
    this._taskService.createOrUpdateTask(this.taskform.value)
      .subscribe((data) => { 
        console.log('task save call');       
        this.resetform() ;
        document.getElementById('savaecofnm').click();
      },
        (exception) => {
          console.log('task save error ' + exception.error);
        });
      }
      else //update
      {
        this._taskService.createOrUpdateTask(this.taskform.value)
      .subscribe((data) => {        
        console.log('task update call');
        this.resetform();
        document.getElementById('savaecofnm').click();
        this.resetform();
      },
        (exception) => {
          console.log('task update error ' + exception.error);
        });
      }

  }

  onPriorityChange(e)
  {
    this.priority = e.target.value;
  }
  enableControl(controlName: string) {
    this.taskform.controls[controlName].enable();
  }

  disableControl(controlName: string) {
    this.taskform.controls[controlName].disable();
  }

  onparenttaskselected(e)
  {
    this.isParentTask = e.target.checked;
    

    let index = 0;
    if (this.isParentTask) {
      console.log('parent task checked true');
      for (index = 0; index < controlNames.length; index++) {
        this.disableControl(controlNames[index]);
      }
      this.disabtaskbutton = true;
      
    } else {
      console.log('parent task checked false');
      for (index = 0; index < controlNames.length; index++) {
        this.enableControl(controlNames[index]);
      }
      this.disabtaskbutton = false;
    }
  }

  warningresult(warnresult)
  {
console.log('warning result for reset' + warnresult);
if(warnresult =='yes')
{
  this.resetform();
}
  }

  resetform() {
    this.taskform.reset();
    this.submitted = false;
    this.priority = 0;
    this.taskform.controls['priority'].setValue(0);
    this.disabtaskbutton = false;
    let index = 0
    for (index = 0; index < controlNames.length; index++) {
      this.enableControl(controlNames[index]);
    }
    document.getElementById('blicktext').classList.remove('blink_me');
      this.addtasktitle = 'Add Task';
  }

}
