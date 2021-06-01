import { Component, OnInit } from '@angular/core';
import { ISelectData } from '../home/home.component';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Workout } from '../workout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-my-workout',
  templateUrl: './my-workout.component.html',
  styleUrls: ['./my-workout.component.css'],
})
export class MyWorkoutComponent implements OnInit {
  breakpoint: number;
  difficulty: string;
  type: string;
  isChecked: boolean = true;
  tags: string;
  workouts: Workout[] = [
    {
      id: 0,
      name: 'Push-ups',
      type: 'ARM',
      difficulty: 'EASY',
      recommended: true,
      image: '/assets/img/Pushups.jpg',
    },
    {
      id: 1,
      name: 'Chest 1',
      type: 'CHEST',
      difficulty: 'EASY',
      recommended: true,
      image: '/assets/img/Chest1.jpg',
    },
  ];
  cols: number;

  gridByBreakpoint = {
    xl: 5,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1,
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    public modalService: NgbModal
  ) {
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

  openModal() {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      size: 'xl',
    };
    const modalRef = this.modalService.open(
      ModalContentComponent,
      ngbModalOptions
    );

    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

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
  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 6;
  }

  onDifficultyChange(newDifficulty) {
    this.difficulty = newDifficulty;
  }

  onTypeChange(newType) {
    this.type = newType;
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 6;
  }
}
