import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { AddEditUsersComponent } from './add-edit-users/add-edit-users.component';
import { AddEditProjectsComponent } from '../app/add-edit-projects/add-edit-projects.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
// import { ListingComponent } from './reusablecomponents/listing/listing.component';
// import { InfoComponent } from './reusablecomponents/info/info.component';
 import { WarningComponent } from '../app/warning/warning.component';
// import { MandatoryalertsComponent } from './reusablecomponents/mandatoryalerts/mandatoryalerts.component';
// import { TestComponent } from './test/test.component';
import{UserlistingComponent} from '../app/userlisting/userlisting.component';
import{FooterComponent} from '../app/footer/footer.component'
import{ConfirmationComponent} from '../app/confirmation/confirmation.component';
import{FilterPipe} from '../app/pipes/filter.pipe';
import{UserService} from '../app/services/user.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddEditUsersComponent,
    AddEditProjectsComponent,
    AddTasksComponent,
    ViewTasksComponent,
    WarningComponent,
    UserlistingComponent,
    FooterComponent,
    ConfirmationComponent,
    FilterPipe
    // ListingComponent,
    // InfoComponent,
    // ConfirmComponent,
    // MandatoryalertsComponent,
    // TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
