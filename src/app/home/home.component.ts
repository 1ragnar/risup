import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { WORKOUTS } from '../mock-workouts';
import { Workout } from '../workout';

export interface ISelectData {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  breakpoint: number;
  difficulty: string;
  type: string;
  isChecked: boolean = true;
  text: string;
  workouts: Workout[];

  cols: number;

  gridByBreakpoint = {
    xl: 5,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1,
  };

  dificulties: ISelectData[] = [
    { value: 'easy', viewValue: 'Easy' },
    { value: 'medium', viewValue: 'Medium' },
    { value: 'hard', viewValue: 'Hard' },
  ];

  types: ISelectData[] = [
    { value: 'abs', viewValue: 'Abs' },
    { value: 'arms', viewValue: 'Arms' },
    { value: 'back', viewValue: 'Back' },
    { value: 'chest', viewValue: 'Chest' },
    { value: 'legs', viewValue: 'Legs' },
  ];
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.cols = this.gridByBreakpoint.xs;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.cols = this.gridByBreakpoint.sm;
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.cols = this.gridByBreakpoint.md;
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.cols = this.gridByBreakpoint.lg;
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.cols = this.gridByBreakpoint.xl;
          }
        }
      });
  }
  
  ngOnInit() {
    this.workouts = WORKOUTS;
  }

  onDifficultyChange(newDifficulty) {
    this.difficulty = newDifficulty;
  }

  onTypeChange(newType) {
    this.type = newType;
  }

  onCheckboxChanged(event) {
    this.isChecked = event.checked;
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 6;
  }
}
