
import { Competition } from './competition';
import { Member } from './member';

export interface Ranking {
  id: number;
  rank: number;
  score: number;
  competition: Competition;
  member: Member;
  competitionId?: number;
  memberId?: number;
}
