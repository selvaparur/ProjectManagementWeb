import { Component, OnInit } from '@angular/core';
import{WarningComponent} from '../warning/warning.component';
import {UserlistingComponent} from '../userlisting/userlisting.component';
import{UserListing} from '../Entities/userlisting';
import{ProjectsModel} from '../Entities/Projects';
import{ProjectService} from '../services/project.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import{UsersModel} from '../Entities/Users';
import { DatePipe } from '@angular/common';
import { AppSettings } from '../Entities/AppSettings';

@Component({
  selector: 'app-add-edit-projects',
  templateUrl: './add-edit-projects.component.html',
  styleUrls: ['./add-edit-projects.component.css'],
  providers:[DatePipe]
})



export class AddEditProjectsComponent implements OnInit {
  selmanager : string;
userlists : Array<UsersModel> = [];
projectform : FormGroup;
allowDateSelection: boolean = false;
priority: number;
projectsmodel : Array<ProjectsModel> = [];
sortBy: string;
addtitle : string;
submitted = false;
selecteduserId: number;

oneuser : UserListing;

  constructor(private fb: FormBuilder, private _ProjectService : ProjectService,
    private _datePipe: DatePipe) { }

  selectedmanagers(values)
  {
    if(values.length > 0)
    {      
      console.log(values.split('-')[0] +' '+ values.split('-')[1] +' '+ values.split('-')[2] +" "+ values.split('-')[3]);
      this.selecteduserId = values.split('-')[0] ;
      this.projectform.patchValue({
        manager : values.split('-')[2] +" "+ values.split('-')[3], 
        userId :this.selecteduserId
      });
     
    }    

    console.log('selected manager id ' + this.projectform.value.userId);
    
  }

  resetconfirm(val)
  {
console.log('reset confirm ' + val);
this.projectform.reset();
this.resetform();
this.priority = 0;
  }

  changeDate(e) {
    this.allowDateSelection = !(e.target.checked);
    this.changeDateControlState();
  }

  changeDateControlState() {
    if (!this.allowDateSelection) {
      this.projectform.controls['startdate'].enable();
      this.projectform.controls['enddate'].enable();
    } else {
      this.projectform.controls['startdate'].disable();
      this.projectform.controls['enddate'].disable();
    }
  }

  onPriorityChange(e) {
    this.priority = e.target.value;
  }

  ngOnInit() {

this.projectform = this.fb.group({
  projectid :[0],
   projectname :['', Validators.required],
   setstartandenddate: [true],
   startdate: new FormControl({ value: '', enabled: true }),
   enddate: new FormControl({ value: '', enabled: true }),
    priority :[0],
    manager :[''],
    userId :this.selecteduserId,
    numberoftasks :[''],
    completed :['']
});

this.addtitle = 'Add';
//document.getElementById('setstartandenddate').check

this.loadManagaers();

// bind project details
this.getexistingprojects();

  }

  loadManagaers() {
    this._ProjectService.getAllManagers().subscribe((data: Array<UsersModel>) => {
      this.userlists = data;
    });
  }

get f(){return this.projectform.controls;}

  onsubmit()
  {
    this.submitted = true;

    // validate start & end date
    const sd = Date.parse(this.projectform.value.startdate);
    const ed = Date.parse(this.projectform.value.enddate);

    if(!isNaN(sd) && !isNaN(ed) )
    {

    if (ed <= sd || (isNaN(sd) || isNaN(ed))) {
      
      console.log('date validation fails');
      document.getElementById('datevalidate').style.marginLeft = '152px';
      document.getElementById('datevalidate').style.visibility = 'visible';

      return;
    }
  }  

  // if(isNaN(sd) || isNaN(ed))
  //   {
  //     console.log('start & end date are coming as undefined');
  //     this.projectform.patchValue({
  //       startdate : new Date('0001/01/01'),
  //       enddate : new Date('dd-MM-yyyy')
  //     });

  //     this.projectform.value.startdate
  //   }

  if(this.projectform.valid)
  {
    document.getElementById('datevalidate').style.visibility = 'hidden';
    
  }

    if(this.projectform.invalid)
    {
      return;
    }

    if(this.addtitle == 'Add')
    {
      console.log('Add Mode');
    console.log(this.projectform.value);
    console.log(' projectname  ' + this.projectform.value.projectname
+' startdate ' + this.projectform.value.startdate + ' enddate ' + this.projectform.value.enddate + ' priority ' 
+ this.projectform.value.priority + ' manager ' + this.projectform.value.manager + ' managerid '+this.projectform.value.userId);
    // call service here to save the data into database.

    this._ProjectService.createOrUpdateProject(this.projectform.value)
    .subscribe((data) => {
      this.resetform();
      // bind project details
    this.getexistingprojects();
    var eledumm = document.getElementById('dummybut').click();
    },
      (erorr) => {
        console.error('error on project save ' + erorr);
      });

    }
    else
    {
      console.log('Edit Mode');
      console.log(this.projectform.value);
      this._ProjectService.createOrUpdateProject(this.projectform.value)
    .subscribe((data) => {
      this.resetform();
      // bind project details
    this.getexistingprojects();
    var eledumm = document.getElementById('dummybut').click();
    this.addtitle = 'Add';
    document.getElementById('addeditpro').classList.remove('blink_me');
    },
      (erorr) => {
        console.error('error on project save ' + erorr);
      });
    }



    

  }
  resetform()
  {
  this.submitted = false;
  this.projectform.reset();
  this.addtitle = 'Add';
  this.priority = 0;
  this.projectform.controls['priority'].setValue(this.priority);
  document.getElementById('addeditpro').classList.remove('blink_me');  
  this.projectform.controls['setstartandenddate'].setValue(true);
  }

getexistingprojects()
{
  this._ProjectService.getAll().subscribe((data: Array<ProjectsModel>) => {
    this.projectsmodel = data;
  });
}

handleSortBy(value) {
  this.sortBy = value;

  switch (this.sortBy) {
    case 'startDate':
      this.projectsmodel = this.projectsmodel.sort((a, b) => {
        return this.getTime(a.StartDate) - this.getTime(b.StartDate);
      });
      break;
    case 'endDate':
      this.projectsmodel = this.projectsmodel.sort((a, b) => {
        return this.getTime(a.EndDate) - this.getTime(b.EndDate);
      });
      break;
    case 'completed':
      this.projectsmodel = this.projectsmodel.sort((a, b) => a.Completed.localeCompare(b.Completed));
      break;
    case 'priority':
      this.projectsmodel = this.projectsmodel.sort((a, b) => a.Priority.toString().localeCompare(b.Priority.toString()));
      break;
    default:
      this.projectsmodel = this.projectsmodel.sort((a, b) => a.ProjectName.localeCompare(b.ProjectName));
      break;
  }

}

private getTime(date?: Date) {
  return date != null ? new Date(date).getTime() : 0;
}

setStartAndEndDate(start: Date, end: Date) {
  const formattedTodayDate = this._datePipe.transform(start, AppSettings.IsoDateFormat).toString();
  const formattedTomorrowDate = this._datePipe.transform(end, AppSettings.IsoDateFormat).toString();
  this.projectform.patchValue({ startdate: formattedTodayDate, enddate: formattedTomorrowDate });
}

editproject(project: ProjectsModel) {

  console.log('Edit '+project.ProjectId +  ' projectid '+project.ProjectId +' projectname  ' + project.ProjectName
+' ' + project.StartDate + ' ' + project.EndDate + ' Priority ' + project.Priority + ' manager ' + project.Manager);

  this.projectform.patchValue({
    projectid : project.ProjectId,
projectname : project.ProjectName,
startdate:project.StartDate,
enddate:project.EndDate,
priority:project.Priority,
manager:project.Manager
  });
   this.addtitle = 'Update';
   document.getElementById('addeditpro').classList.add('blink_me');
   this.priority = project.Priority;
   this.setStartAndEndDate(project.StartDate, project.EndDate);
   this.changeDateControlState();
}

}
