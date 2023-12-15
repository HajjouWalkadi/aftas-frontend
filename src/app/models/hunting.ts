// hunting.model.ts
import { Member } from './member';
import { Competition } from './competition';
import { Fish } from './fish';

export interface Hunting {
  id: number;
  numberOfFish: number;
  // Add the following properties based on your requirements
  competitionId: number;
  memberNum: number;
  fishId: number;
  
  // Relationships
  member?: Member;
  competition?: Competition;
  fish?: Fish;
  // Add other relationships if needed

  // ... other properties
}