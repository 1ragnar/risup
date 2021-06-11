import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ISelectData } from '../home/home.component';
import {
  IDragAndDropItem,
  IDragAndDropCreatedItem,
} from '../drag-and-drop-list/drag-and-drop-list.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css'],
})
export class ModalContentComponent implements OnInit {
  type: string;
  currentExercises: IDragAndDropItem[];
  numberOfRepetition: string = '';
  exercise: string;
  createdExercises: IDragAndDropCreatedItem[] = [];

  excerciseName: string = '';
  difficulty: string;
  difficulties: ISelectData[] = [
    { value: 'easy', viewValue: 'Easy' },
    { value: 'medium', viewValue: 'Medium' },
    { value: 'hard', viewValue: 'Hard' },
  ];

  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(
    public activeModal: NgbActiveModal,
    public snackBar: MatSnackBar
  ) {}

  passBack() {
    if (this.difficulty && this.excerciseName && this.createdExercises) {
      this.passEntry.emit({
        createdExercises: this.createdExercises,
        excerciseName: this.excerciseName,
      });
      this.activeModal.close({
        createdExercises: this.createdExercises,
        excerciseName: this.excerciseName,
        difficulty: this.difficulty.toUpperCase(),
      });
    } else {
      this.snackBar.open(
        'You need to defined at least one exercise, diffuculty and workout name in order to save',
        'Error',
        {
          duration: 5000,
        }
      );
    }
  }

  types: ISelectData[] = [
    { value: 'abs', viewValue: 'Abs' },
    { value: 'arms', viewValue: 'Arms' },
    { value: 'back', viewValue: 'Back' },
    { value: 'chest', viewValue: 'Chest' },
    { value: 'legs', viewValue: 'Legs' },
  ];

  absWorkout: IDragAndDropItem[] = [
    {
      workoutTypeName: 'Abs',
      exercisesName: 'Mountain climber',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Abs',
      exercisesName: 'Reverse crunch',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Abs',
      exercisesName: 'Russian twist',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Abs',
      exercisesName: 'Slide crunch',
      numberOfRepetition: '0',
      disabled: true,
    },
  ];

  armsWorkout: IDragAndDropItem[] = [
    {
      workoutTypeName: 'Arms',
      exercisesName: 'Arm circle',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Arms',
      exercisesName: 'Plank',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Arms',
      exercisesName: 'Rolling push ups',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Arms',
      exercisesName: 'Spiderman',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Arms',
      exercisesName: 'Dips',
      numberOfRepetition: '0',
      disabled: true,
    },
  ];

  backWorkout: IDragAndDropItem[] = [
    {
      workoutTypeName: 'Back',
      exercisesName: 'Bridge',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Back',
      exercisesName: 'High plank',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Back',
      exercisesName: 'Low plank',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Back',
      exercisesName: 'Push ups',
      numberOfRepetition: '0',
      disabled: true,
    },
  ];

  chestWorkout: IDragAndDropItem[] = [
    {
      workoutTypeName: 'Chest',
      exercisesName: 'Diamond push ups',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Chest',
      exercisesName: 'Decline push ups',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Chest',
      exercisesName: 'Standrad push ups',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Chest',
      exercisesName: 'Wide push ups',
      numberOfRepetition: '0',
      disabled: true,
    },
  ];

  legsWorkout: IDragAndDropItem[] = [
    {
      workoutTypeName: 'Legs',
      exercisesName: 'Leg raise',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Legs',
      exercisesName: 'Lunge',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Legs',
      exercisesName: 'Squat',
      numberOfRepetition: '0',
      disabled: true,
    },
    {
      workoutTypeName: 'Legs',
      exercisesName: 'Sits',
      numberOfRepetition: '0',
      disabled: true,
    },
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
    } else {
      this.currentExercises = this.absWorkout.concat(
        this.armsWorkout.concat(
          this.backWorkout.concat(this.chestWorkout.concat(this.legsWorkout))
        )
      );
    }
  }

  onDifficultyChange(newDifficulty) {
    this.difficulty = newDifficulty;
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
        id: this.createdExercises.length,
        order: this.createdExercises.length,
        numberOfRepetition: +this.numberOfRepetition,
        workoutTypeName: this.type,
        exercisesName: this.exercise,
      });

      this.type = undefined;
      this.numberOfRepetition = '';
      this.exercise = undefined;
    } else {
      this.snackBar.open(
        'You need to defined diffuculty, workout name and at least one exercise in order to save',
        'Error',
        {
          duration: 2000,
        }
      );
    }
  }
}
