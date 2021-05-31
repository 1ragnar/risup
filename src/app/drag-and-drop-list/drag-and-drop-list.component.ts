import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

export interface IDragAndDropItem {
  id: number;
  order: number;
  numberOfRepetition: number;
  workoutTypeName: string;
  exercisesName: string;
}

@Component({
  selector: 'app-drag-and-drop-list',
  templateUrl: './drag-and-drop-list.component.html',
  styleUrls: ['./drag-and-drop-list.component.css'],
})
export class DragAndDropListComponent implements OnInit {
  list: IDragAndDropItem[] = [
    {
      id: 1,
      order: 0,
      numberOfRepetition: 15,
      workoutTypeName: 'Abs',
      exercisesName: 'Mountain climber',
    },
    {
      id: 2,
      order: 1,
      numberOfRepetition: 10,
      workoutTypeName: 'Arms',
      exercisesName: 'Plank',
    },
  ];
  constructor() {}

  drop(event: CdkDragDrop<IDragAndDropItem[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  ngOnInit(): void {}
}
