import { Component, OnInit } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { Hunting } from 'src/app/models/hunting';
import { CompetitionService } from 'src/app/services/competition.service';
import { FishService } from 'src/app/services/fish.service';
import { HuntingService } from 'src/app/services/hunting.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-list-hunting',
  templateUrl: './list-hunting.component.html',
  styleUrls: ['./list-hunting.component.css']
})
export class ListHuntingComponent implements OnInit{
  huntList: Hunting[] = [];

  constructor(
    private huntingService: HuntingService,
    private memberService: MemberService,
    private competitionService: CompetitionService,
    private fishService: FishService 
  ) {}

  ngOnInit(): void {
    this.loadHunts();
  }

 
loadHunts(): void {
  this.huntingService.getAllHuntings().subscribe(
    hunts => {
      const observables = hunts.map(hunt => {
        const memberObs = this.memberService.getMemberByNum(hunt.memberId);
        const competitionObs = this.competitionService.getCompetitionById(hunt.competitionId);
        const fishObs = this.fishService.getFishById(hunt.fishId);

        return forkJoin({ member: memberObs, competition: competitionObs, fish: fishObs })
          .pipe(
           
            map(details => ({ ...hunt, ...details }))
          );
      });

      forkJoin(observables).subscribe(
        huntsWithDetails => {
          this.huntList = huntsWithDetails;
        },
        error => console.log(error)
      );
    },
    error => console.log(error)
  );
}
  fetchMemberDetails(memberNum: number): void {
    this.memberService.getMemberByNum(memberNum).subscribe(
      member => {
        const hunt = this.huntList.find(h => h.memberId === memberNum);
        if (hunt) {
          hunt.member = member;
        }
      },
      error => console.log(error)
    );
  }

  fetchCompetitionDetails(competitionId: number): void {
    this.competitionService.getCompetitionById(competitionId).subscribe(
      competition => {
        const hunt = this.huntList.find(h => h.competitionId === competitionId);
        if (hunt) {
          hunt.competition = competition;
        }
      },
      error => console.log(error)
    );
  }

  fetchFishDetails(fishId: number): void {
    this.fishService.getFishById(fishId).subscribe(
      fish => {
        const hunt = this.huntList.find(h => h.fishId === fishId);
        if (hunt) {
          hunt.fish = fish;
        }
      },
      error => console.log(error)
    );
  }

  viewHunt(id: number): void {
    console.log(`View hunting with id ${id}`);
  }

  editHunt(id: number): void {
    console.log(`Edit hunting with id ${id}`);
  }

  // deleteHunt(id: number): void {
  //   this.huntingService.deleteHunting(id).subscribe(
  //     () => {
  //       console.log(`Hunt with ID ${id} deleted successfully.`);
  //       this.loadHunts();
  //     },
  //     (error) => {
  //       console.error(`Error deleting hunt with ID ${id}:`, error);
  //     }
  //   );
  // }


}
