import { Component, Input, OnInit, Inject } from '@angular/core';
import { Workout } from '../workout';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

export interface DialogData {
  name: string;
  difficulty: string;
  video: string;
  description: string;
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

  constructor(public dialog: MatDialog, private _sanitizer: DomSanitizer) {}
 
  ngOnInit(): void {}

  @Input() data: Workout;

  openWorkout(): void {
    const dialogRef = this.dialog.open(workoutModal, {
      width: '1000px',
      data: {name: this.data.name, difficulty: this.data.difficulty}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
  @Component({
    selector: 'workoutModal',
    templateUrl: 'workout_modal.html',
  })
  export class workoutModal {
  
    constructor(
      public dialogRef: MatDialogRef<workoutModal>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
}
