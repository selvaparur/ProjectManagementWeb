import { Component } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectManagementWeb';

  constructor(private _Router : Router){}

  ngOnInit()
  {    
    document.getElementById('divhelptext').innerHTML =this.helptextforadduser();
    this.changebackcolor('adduser');

       this._Router.navigate(['/add-users']);
  }

changebackcolor(alink){
  document.getElementById(alink).style.background = '#AD9AE9';
  document.getElementById(alink).style.border = '1px transparent solid';
  document.getElementById(alink).style.borderRadius='9px';
  document.getElementById(alink).style.color='white'; 
  document.getElementById(alink).style.boxShadow='0px -1px 13px 6px white';  
}

  helptext(soruce)
  {
    var hetext = '';
    if(soruce == 'project')
    {
      hetext = '<p><b>Add Project</b> has <b>2</b> sections,</p>'
      hetext += '&nbsp;&nbsp;<b>1)	Add Project Details<br/></b>'
      hetext +='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Add project title, start & end dates, Priority & assign manager'
      hetext +='<br/>&nbsp;&nbsp;<b>2)	View Project Details</b>'
      hetext +='<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* View no of Tasks completed, Start & End Date & Priority'
      hetext +='<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Provision to Update & Suspend projects'

      document.getElementById('divhelptext').innerHTML =hetext;
      this.changebackcolor('addproject');

      document.getElementById('addtask').style.background = '';
      document.getElementById('addtask').style.border = '';
      document.getElementById('addtask').style.borderRadius='';
      document.getElementById('addtask').style.boxShadow='';

      document.getElementById('adduser').style.background = '';
      document.getElementById('adduser').style.border = '';
      document.getElementById('adduser').style.borderRadius='';
      document.getElementById('adduser').style.boxShadow='';

      document.getElementById('viewtask').style.background = '';
      document.getElementById('viewtask').style.border = '';
      document.getElementById('viewtask').style.borderRadius='';
      document.getElementById('viewtask').style.boxShadow='';
    }
    else if(soruce == 'addtask')
    {
      hetext = '<p><b>Add Task</b> screen is used to add the following details,<br/></p>'
      hetext+= '&nbsp;&nbsp;&nbsp;* Project<br/>'
      hetext+= '&nbsp;&nbsp;&nbsp;* Task<br/>'
      hetext+= '&nbsp;&nbsp;&nbsp;* Priority<br/>'
      hetext+= '&nbsp;&nbsp;&nbsp;* Parent Task<br/>'
      hetext+= '&nbsp;&nbsp;&nbsp;* Start & End Dates<br/>'

      document.getElementById('divhelptext').innerHTML =hetext;
      this.changebackcolor('addtask');

      document.getElementById('addproject').style.background = '';
      document.getElementById('addproject').style.border = '';
      document.getElementById('addproject').style.borderRadius='';
      document.getElementById('addproject').style.boxShadow='';

      document.getElementById('adduser').style.background = '';
      document.getElementById('adduser').style.border = '';
      document.getElementById('adduser').style.borderRadius='';
      document.getElementById('adduser').style.boxShadow='';

      document.getElementById('viewtask').style.background = '';
      document.getElementById('viewtask').style.border = '';
      document.getElementById('viewtask').style.borderRadius='';
      document.getElementById('viewtask').style.boxShadow='';
    }
    else if(soruce == 'user')
    {
      
      document.getElementById('divhelptext').innerHTML =this.helptextforadduser();
      this.changebackcolor('adduser');

      document.getElementById('addproject').style.background = '';
      document.getElementById('addproject').style.border = '';
      document.getElementById('addproject').style.borderRadius='';
      document.getElementById('addproject').style.boxShadow='';

      document.getElementById('addtask').style.background = '';
      document.getElementById('addtask').style.border = '';
      document.getElementById('addtask').style.borderRadius='';
      document.getElementById('addtask').style.boxShadow='';

      document.getElementById('viewtask').style.background = '';
      document.getElementById('viewtask').style.border = '';
      document.getElementById('viewtask').style.borderRadius='';
      document.getElementById('viewtask').style.boxShadow='';
    }
    else if(soruce == 'viewtask')
    {
      hetext = '<p><b>View Task</b> screen is used for the following purpose,</p>'
      hetext += '&nbsp;&nbsp;<b>1) View Project Details</b>'
      hetext += '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Like Task, Parent Task, Priority, Start & End Dates<br/>'
      hetext += '&nbsp;&nbsp;<b>2) User Operations</b><br/>'
      hetext += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Provision for edit & end task'

      document.getElementById('divhelptext').innerHTML =hetext;
      this.changebackcolor('viewtask');

      document.getElementById('addproject').style.background = '';
  document.getElementById('addproject').style.border = '';
  document.getElementById('addproject').style.borderRadius='';
  document.getElementById('addproject').style.boxShadow='';

  document.getElementById('addtask').style.background = '';
      document.getElementById('addtask').style.border = '';
      document.getElementById('addtask').style.borderRadius='';
      document.getElementById('addtask').style.boxShadow='';

      document.getElementById('adduser').style.background = '';
      document.getElementById('adduser').style.border = '';
      document.getElementById('adduser').style.borderRadius='';
      document.getElementById('adduser').style.boxShadow='';
    }
    
  }

  helptextforadduser(){
    var ht = '';
    ht = '<p><b>Add User</b> has <b>2</b> sections,</p>'
    ht += '&nbsp;&nbsp;<b>1)	Add User Details<br/></b>'
    ht +='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Add First Name, Last Name & Employee ID'
    ht +='<br/>&nbsp;&nbsp;<b>2)	View User Details</b>'
    ht +='<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* View & Update First Name, Last Name & Employee ID'      

    return ht;
  }

}
