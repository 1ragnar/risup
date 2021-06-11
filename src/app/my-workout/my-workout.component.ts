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
  name: string;
  workouts: Workout[] = [
    {
      id: 0,
      name: 'Push-ups',
      type: 'ARMS',
      difficulty: 'EASY',
      recommended: false,
      image: '/assets/img/Pushups.jpg',
    },
    {
      id: 1,
      name: 'Chest 1',
      type: 'CHEST',
      difficulty: 'MEDIUM',
      recommended: false,
      image: '/assets/img/Chest1.jpg',
    },
  ];
  selectedWorkouts: Workout[] = this.workouts;
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
      // backdrop: 'static',
      keyboard: false,
      size: 'xl',
    };

    const modalRef = this.modalService.open(
      ModalContentComponent,
      ngbModalOptions
    );

    modalRef.result.then(
      (result) => {
        if (result) {
          console.log(result);
          this.workouts.push({
            id: this.workouts.length,
            name: result.excerciseName,
            type: 'CUSTOM',
            difficulty: result.difficulty,
            recommended: false,
            image:
              this.workouts.length == 2
                ? '/assets/img/Pushups.jpg'
                : this.workouts.length == 3
                ? '/assets/img/FullBody1.jpg'
                : '/assets/img/Chest3.jpg',
          });
        }
      },
      (reason) => {}
    );
  }

  difficulties: ISelectData[] = [
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

  search() {
    let filteredWorkouts = this.workouts.filter((item: Workout) => {
      let finded = true;
      if (this.name && !item.name.match(this.name)) {
        finded = false;
      }
      if (this.type !== '0' && !item.type.match(this.type?.toUpperCase())) {
        finded = false;
      }
      if (
        this.difficulty !== '0' &&
        !item.difficulty.match(this.difficulty?.toUpperCase())
      ) {
        finded = false;
      }
      return finded;
    });

    this.selectedWorkouts = filteredWorkouts;
  }
}
