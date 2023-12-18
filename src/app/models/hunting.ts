// hunting.model.ts
import { Member } from './member';
import { Competition } from './competition';
import { Fish } from './fish';

export interface Hunting {
  id: number;
  numberOfFish: number;
  averageWeight: number;
  competitionId: number;
  memberId: number;
  fishId: number;


  // Relationships
   member?: Member;
  competition?: Competition;
   fish?: Fish;

}