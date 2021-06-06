import { Component,Output, EventEmitter } from '@angular/core';
//import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal, NgbModalOptions,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

<<<<<<< HEAD

=======
export interface DialogData {
  numCalories: number;
  foodname: string;
}
>>>>>>> f7313e85434743ca3adbf59bc344f2328f07c9a0

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
      backdrop: 'static',
      keyboard: false,
      size: 'xl',
    };
    const modalRef = this.dialog.open(
      CaloriesDialog,
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
}


