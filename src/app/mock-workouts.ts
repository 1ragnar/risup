import { Workout } from './workout';

export const WORKOUTS: Workout[] = [
  {id: 0, name: 'Push-ups', type: 'ARM', difficulty: 'EASY', recommended: true},
  {id: 1, name: 'Chest 1', type: 'CHEST', difficulty: 'EASY', recommended: true},
  {id: 2, name: 'Chest 2', type: 'CHEST', difficulty: 'MEDIUM', recommended: false},
  {id: 3, name: 'Chest 3', type: 'CHEST', difficulty: 'HARD', recommended: false},
  {id: 4, name: 'Leg 1', type: 'LEG', difficulty: 'MEDIUM', recommended: true},
  {id: 5, name: 'Full body 1', type: 'FULL BODY', difficulty: 'HARD', recommended: false}
];