import { Component,Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CaloriesModalComponent } from '../calories-modal/calories-modal.component';


@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent {
  numCalories: number;
  foodname: string;

  constructor(public dialog: NgbModal) {}

  openDialog(): void {
    /*const dialogRef = this.dialog.open(CaloriesDialog, {
      width: '500px',
      height:'400px',
      data: {numCalories: this.numCalories, foodname: this.foodname}
    });*/
    let ngbModalOptions: NgbModalOptions = {
      //backdrop: 'static',
      keyboard: false,
      size: 'xl',
    };
    const modalRef = this.dialog.open(
      CaloriesModalComponent,
      ngbModalOptions
    );

    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
    /*
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.numCalories = result;
    });*/

  }
  onNumCalories(newNumCalories) {
    this.numCalories = newNumCalories;
  }
  onfoodname(newfoodname) {
    this.foodname = newfoodname;
  }
}
/*
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class CaloriesDialog {
  numCalories: number;
  foodname: string;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) {}
    

  add(): void {
    this.activeModal.close();
  }
  passBack() {
    this.passEntry.emit(this.numCalories);
    this.activeModal.close(this.numCalories);
  }
  ngOnInit(): void {}
}
*/

