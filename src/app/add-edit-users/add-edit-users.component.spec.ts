import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import{ReactiveFormsModule,FormGroup, FormBuilder, FormsModule} from '@angular/forms';
import{FilterPipe} from '../pipes/filter.pipe';
import{WarningComponent} from '../warning/warning.component';
import{UserlistingComponent} from '../userlisting/userlisting.component';
import{ConfirmationComponent} from '../confirmation/confirmation.component';
import{FooterComponent} from '../footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{RouterModule, Router} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AddEditUsersComponent } from './add-edit-users.component';

describe('AddEditUsersComponent', () => {
  let component: AddEditUsersComponent;
  let fixture: ComponentFixture<AddEditUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditUsersComponent,FilterPipe,WarningComponent,UserlistingComponent,ConfirmationComponent,FooterComponent ],
      imports:[ReactiveFormsModule,FormsModule,HttpClientModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('header should be there',()=>{
    const hostElement = fixture.nativeElement;
    const nameInputheader: HTMLInputElement = hostElement.querySelector('compstylechild');    
    console.log(nameInputheader);
    expect(nameInputheader).toBeNull();
  });

});
