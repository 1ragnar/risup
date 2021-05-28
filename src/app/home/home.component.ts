import { Component, OnInit } from '@angular/core';

export interface ISelectData {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  breakpoint: number;
  difficulty: string;
  type: string;
  isChecked: boolean = true;
  text: string;
  constructor() {}

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

  onCheckboxChanged(event) {
    this.isChecked = event.checked;
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 6;
  }
}
