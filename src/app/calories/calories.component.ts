import { Component,  Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  numCalories: number;
  foodname: string;
}

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent {
  numCalories: number;
  foodname: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CaloriesDialog, {
      width: '500px',
      height:'300px',
      data: {numCalories: this.numCalories, foodname: this.foodname}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.numCalories = result;
    });
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class CaloriesDialog {

  constructor(
    public dialogRef: MatDialogRef<CaloriesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    

  add(): void {
    this.dialogRef.close();
  }

}


/*
@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/