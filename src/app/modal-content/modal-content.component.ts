import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ISelectData } from '../home/home.component';
import { IDragAndDropItem } from '../drag-and-drop-list/drag-and-drop-list.component';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css'],
})
export class ModalContentComponent implements OnInit {
  type: string;
  currentExercises: ISelectData[];
  numberOfRepetition: string = '';
  exercise: string;
  createdExercises: IDragAndDropItem[] = [];

  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) {}

  passBack() {
    this.passEntry.emit(this.type);
    this.activeModal.close(this.type);
  }

  types: ISelectData[] = [
    { value: 'abs', viewValue: 'Abs' },
    { value: 'arms', viewValue: 'Arms' },
    { value: 'back', viewValue: 'Back' },
    { value: 'chest', viewValue: 'Chest' },
    { value: 'legs', viewValue: 'Legs' },
  ];

  absWorkout: ISelectData[] = [
    { value: 'mountain-climber', viewValue: 'Mountain climber' },
    { value: 'reverse-crunch', viewValue: 'Reverse crunch' },
    { value: 'russian-twist', viewValue: 'Russian twist' },
    { value: 'slide-crunch', viewValue: 'Slide crunch' },
  ];

  armsWorkout: ISelectData[] = [
    { value: 'arm-cirlce', viewValue: 'Arm circle' },
    { value: 'plank', viewValue: 'Plank' },
    { value: 'rolling-pushups', viewValue: 'Rolling push ups' },
    { value: 'spiderman', viewValue: 'Spiderman' },
    { value: 'dips', viewValue: 'Dips' },
  ];

  backWorkout: ISelectData[] = [
    { value: 'bridge', viewValue: 'Bridge' },
    { value: 'high-plank', viewValue: 'High plank' },
    { value: 'low-plank', viewValue: 'Low plank' },
    { value: 'push-ups', viewValue: 'Push ups' },
  ];

  chestWorkout: ISelectData[] = [
    { value: 'diamond', viewValue: 'Diamond push ups' },
    { value: 'decline', viewValue: 'Decline push ups' },
    { value: 'standard', viewValue: 'Standrad push ups' },
    { value: 'wide', viewValue: 'Wide push ups' },
  ];

  legsWorkout: ISelectData[] = [
    { value: 'leg-raise', viewValue: 'Leg raise' },
    { value: 'lunge', viewValue: 'Lunge' },
    { value: 'squat', viewValue: 'Squat' },
    { value: 'sits', viewValue: 'Sits' },
  ];

  onTypeChange(newType) {
    this.type = newType;
    if (newType === 'abs') {
      this.currentExercises = this.absWorkout;
    } else if (newType === 'arms') {
      this.currentExercises = this.armsWorkout;
    } else if (newType === 'back') {
      this.currentExercises = this.backWorkout;
    } else if (newType === 'chest') {
      this.currentExercises = this.chestWorkout;
    } else if (newType === 'legs') {
      this.currentExercises = this.legsWorkout;
    }
  }

  onExerciseChange(newExercise) {
    this.exercise = newExercise;
  }

  ngOnInit(): void {
    this.currentExercises = this.absWorkout.concat(
      this.armsWorkout.concat(
        this.backWorkout.concat(this.chestWorkout.concat(this.legsWorkout))
      )
    );
  }

  saveExercise() {
    if (this.type && this.numberOfRepetition && this.exercise) {
      this.createdExercises.push({
        id: Math.round(Math.random() * 1000000),
        order: Math.round(Math.random() * 1000000),
        numberOfRepetition: +this.numberOfRepetition,
        workoutTypeName: this.type,
        exercisesName: this.exercise,
      });

      this.type = undefined;
      this.numberOfRepetition = '';
      this.exercise = undefined;
    }
  }

  createWorkout() {}
}
