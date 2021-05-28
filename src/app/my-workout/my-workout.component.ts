import { Component, OnInit } from '@angular/core';
import { ISelectData } from '../home/home.component';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(public modalService: NgbModal) {}

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
