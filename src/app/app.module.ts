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

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MyWorkoutComponent,
    HomeComponent,
    CaloriesComponent,
    WorkoutCardComponent,
    ModalContentComponent,
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
  ],
  providers: [],
  entryComponents: [ModalContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
