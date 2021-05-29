import { Workout } from './workout';

export const WORKOUTS: Workout[] = [
  {id: 0, name: 'Push-ups', type: 'ARM', difficulty: 'EASY', recommended: true, image: "/assets/img/Pushups.jpg"},
  {id: 1, name: 'Chest 1', type: 'CHEST', difficulty: 'EASY', recommended: true, image: "/assets/img/Chest1.jpg"},
  {id: 2, name: 'Chest 2', type: 'CHEST', difficulty: 'MEDIUM', recommended: false, image: "/assets/img/Chest2.jpg"},
  {id: 3, name: 'Chest 3', type: 'CHEST', difficulty: 'HARD', recommended: false, image: "/assets/img/Chest3.jpg"},
  {id: 4, name: 'Leg 1', type: 'LEG', difficulty: 'MEDIUM', recommended: true, image: "/assets/img/Leg1.jpg"},
  {id: 5, name: 'Full body 1', type: 'FULL BODY', difficulty: 'HARD', recommended: false, image: "/assets/img/FullBody1.jpg"}
];