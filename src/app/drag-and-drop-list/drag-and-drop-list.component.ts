import { Component, OnInit, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem,
} from '@angular/cdk/drag-drop';

export interface IDragAndDropCreatedItem {
  id: number;
  order: number;
  numberOfRepetition: number;
  workoutTypeName: string;
  exercisesName: string;
}

export interface IDragAndDropItem {
  workoutTypeName: string;
  exercisesName: string;
  numberOfRepetition: string;
  disabled: boolean;
}

@Component({
  selector: 'app-drag-and-drop-list',
  templateUrl: './drag-and-drop-list.component.html',
  styleUrls: ['./drag-and-drop-list.component.css'],
})
export class DragAndDropListComponent implements OnInit {
  @Input() createdList: IDragAndDropCreatedItem[];
  @Input() exercisesList: IDragAndDropItem[];

  constructor() {}

  ngOnInit(): void {}
  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
