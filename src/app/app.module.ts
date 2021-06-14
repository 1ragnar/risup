import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyWorkoutComponent } from './my-workout/my-workout.component';
import { HomeComponent } from './home/home.component';
import { WorkoutCardComponent } from './workout-card/workout-card.component';
import { MatSelectModule } from '@angular/material/select';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { CaloriesComponent } from './calories/calories.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragAndDropListComponent } from './drag-and-drop-list/drag-and-drop-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { CaloriesModalComponent } from './calories-modal/calories-modal.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { WorkoutModalComponent } from './workout-modal/workout-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MyWorkoutComponent,
    HomeComponent,
    CaloriesComponent,
    WorkoutCardComponent,
    ModalContentComponent,
    DragAndDropListComponent,
    CaloriesModalComponent,
    WorkoutModalComponent,
    //SearchComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    // Modules for the workout cards
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    DragDropModule,
    NgbModule,
    // Modules for the calories
    MatFormFieldModule,
    MatRippleModule,
    ScrollingModule,
    MatSnackBarModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
  ],
  providers: [],
  entryComponents: [
    ModalContentComponent,
    WorkoutModalComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
