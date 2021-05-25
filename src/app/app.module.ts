import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyWorkoutComponent } from './my-workout/my-workout.component';
import { HomeComponent } from './home/home.component';
import { CaloriesComponent } from './calories/calories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MyWorkoutComponent,
    HomeComponent,
    CaloriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
