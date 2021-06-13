import { Exercise } from "./exercise";

export interface Workout {
  id: number;
  name: string;
  type: string;
  difficulty: string;
  recommended: boolean;
  image: string;
  exercise: Exercise[];
}
