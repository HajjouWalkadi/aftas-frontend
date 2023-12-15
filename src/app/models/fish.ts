import { Level } from './level';

export interface Fish {
  id: number;
  name: string;
  averageWeight: number;
  level: {
    id: number;
    description: string;
    points: number;
  };
}
