import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import{ReactiveFormsModule,FormGroup, FormBuilder, FormsModule} from '@angular/forms';
import{ActivatedRoute} from '@angular/router';
import{FilterPipe} from '../pipes/filter.pipe';
import{WarningComponent} from '../warning/warning.component';
import{UserlistingComponent} from '../userlisting/userlisting.component';
import{ConfirmationComponent} from '../confirmation/confirmation.component';
import{FooterComponent} from '../footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AddTasksComponent } from './add-tasks.component';

describe('AddTasksComponent', () => {
  let component: AddTasksComponent;
  let fixture: ComponentFixture<AddTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTasksComponent,FilterPipe,WarningComponent,UserlistingComponent,ConfirmationComponent,FooterComponent],
      imports:[ReactiveFormsModule,FormsModule,RouterTestingModule,HttpClientModule]      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
