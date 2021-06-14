import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DialogData } from '../workout-card/workout-card.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-workout-modal',
  templateUrl: './workout-modal.component.html',
  styleUrls: ['./workout-modal.component.css']
})
export class WorkoutModalComponent implements OnInit {
  name: string;
  difficulty: string;
  video: string;
  description: string;

  @Input() data: DialogData;

  constructor() { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.onNoClick;
  }
}
