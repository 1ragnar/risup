import { Component, Input, OnInit, Inject } from '@angular/core';
import { Workout } from '../workout';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Exercise } from '../exercise';

export interface DialogData {
  name: string;
  difficulty: string;
  video: string;
  description: string;
  exercise: Exercise[];
}

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.css'],
})
export class WorkoutCardComponent implements OnInit {
  name: string;
  difficulty: string;
  video: string;
  description: string;
  exercise: Exercise[];


  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  @Input() data: Workout;

  openWorkout(): void {
    const dialogRef = this.dialog.open(workoutModal, {
      width: '1000px',
      data: { name: this.data.name, difficulty: this.data.difficulty, exercise: this.data.exercise },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
@Component({
  selector: 'workoutModal',
  templateUrl: './../workout-modal/workout-modal.component.html',
  styleUrls: ['./../workout-modal/workout-modal.component.css'],
})
export class workoutModal {
  constructor(
    public dialogRef: MatDialogRef<workoutModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
