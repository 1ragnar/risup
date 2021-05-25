import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyWorkoutComponent } from './my-workout/my-workout.component';
import { HomeComponent } from './home/home.component';
import { CaloriesComponent } from './calories/calories.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'my-workout', component: MyWorkoutComponent },
  { path: 'calories', component: CaloriesComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
