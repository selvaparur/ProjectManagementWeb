import { Component, OnInit } from '@angular/core';
import{UsersModel} from '../Entities/Users';
import{FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { TaskService } from '../services/task.service';
import{UserService} from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-edit-users',
  templateUrl: './add-edit-users.component.html',
  styleUrls: ['./add-edit-users.component.css']
  
})
export class AddEditUsersComponent implements OnInit {

userform : FormGroup;
userformlist:Array<UsersModel> = [];
submitted = false;
addtitle = 'Add';
sortBy: string;
deleteuserid:number;
tet : string;


  constructor(
    private formbuild : FormBuilder,
    private _userservice : UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userform = this.formbuild.group({
      userid:[0],    
    firstname:['',Validators.required],
    lastname: ['',Validators.required],
    employeeid:['',[Validators.required, Validators.min(1)]]  
    });

    this.getAllUsers();
  }

  onsubmit()
{
  this.submitted = true;
  if(this.userform.invalid)
  {return;}
 
  // Call service for save
  if(this.addtitle == 'Add')
  {
    console.log('add');
console.log(this.userform.value);


this._userservice.createOrUpdateUser(this.userform.value)
      .subscribe((data) => {        
        this.userform.reset();  
        this.getAllUsers();
        document.getElementById('dummybut').click();      
      },
        (exception) => {
          console.error('add user failed!!!' + exception.message);
          console.error('add user failed!!!' + exception.error);
        });

  }
  else{
    console.log('update');
    console.log(this.userform.value);
    this._userservice.createOrUpdateUser(this.userform.value)
      .subscribe((data) => {        
        this.userform.reset();  
        this.getAllUsers();    
        this.addtitle = 'Add';  
        document.getElementById('addsave').classList.remove('blink_me');
        document.getElementById('dummybut').click();
      },
        (exception) => {
          console.error('update user failed!!!');
        });
  }  

//call service to get record from db

this.submitted = false;
}

getAllUsers() {
  console.log('get users called');
  this._userservice.getUsers().subscribe((data: Array<UsersModel>) => {
    console.log('get all user output' + data);
    this.userformlist = data; 
  });
}

get f(){return this.userform.controls}

onedit(userlist)
{
console.log(userlist.UserId + ' ' + userlist.FirstName);

this.userform.patchValue({
  userid : userlist.UserId ,
  firstname : userlist.FirstName,
  lastname:userlist.LastName,
  employeeid : userlist.EmployeeId
});

this.addtitle = 'Update';
document.getElementById('addsave').classList.add('blink_me');


}

deleterec(res)
{
if(res == 'yes')
{
console.log(this.deleteuserid + ' has been deleted');  
// call service to delete the record in db
console.log('user id to delete ' + this.deleteuserid);

if (this.deleteuserid > 0) {
  this._userservice.delete(this.deleteuserid).subscribe((response) => {
    this.getAllUsers();
  });
}
// get updated value from db.
}

document.getElementById('deldummy').click();

}

delrec(usr)
{
  this.deleteuserid = usr.UserId;
}

resetformconf(rst)
{
if(rst =='yes')
{
  console.log('reset form value call')  

this.resetformvalues();
this.submitted=false;

}
}

resetformvalues(){
  this.userform.patchValue({
userid : 0,
firstname: '',
lastname : '',
employeeid : null
});
this.addtitle = 'Add';
}

handleSortBy(value) {
  this.sortBy = value;
  switch (this.sortBy) {
    case 'lastname':
      this.userformlist = this.userformlist.sort((a, b) => a.LastName.localeCompare(b.LastName));
      break;
    case 'employeeId':
      this.userformlist = this.userformlist.sort((a, b) => a.EmployeeId.toLocaleString().localeCompare(b.EmployeeId.toLocaleString()));
      break;
    default:
      this.userformlist = this.userformlist.sort((a, b) => a.FirstName.localeCompare(b.FirstName));
      break;
  }
}

}
  


