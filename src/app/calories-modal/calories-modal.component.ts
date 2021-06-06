import { Component,Output, EventEmitter } from '@angular/core';
//import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calories-modal',
  templateUrl: './calories-modal.component.html',
  styleUrls: ['./calories-modal.component.css']
})
export class CaloriesModalComponent {

  numCalories: number;
  foodName: string;
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
