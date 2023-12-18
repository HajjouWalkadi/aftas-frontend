import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competition } from 'src/app/models/competition';
import { Member } from 'src/app/models/member';
import { CompetitionService } from 'src/app/services/competition.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-view-competition',
  templateUrl: './view-competition.component.html',
  styleUrls: ['./view-competition.component.css']
})
export class ViewCompetitionComponent {
  competitionId: number = 0;
  competitionDetails?: Competition;
  members: Member[] = [];

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    private competitionService: CompetitionService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.competitionId = params['code'];
      this.loadCompetitionDetails();
      this.loadMembers();
    });
  }

  loadCompetitionDetails(): void {
    // Implement logic to fetch competition details based on this.competitionId
    // Assign the fetched data to this.competitionDetails
    this.competitionService.getCompetitionById(this.competitionId).subscribe(
      (data) => {
        this.competitionDetails = data;
      }
    )
  }

  loadMembers(): void {

    this.memberService.getAllMembers().subscribe(
      (data) => {
      
        this.members = data.data; // Assuming the data is an array of members
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addToCompetition(memberId?: number) {
    if(memberId) {
      this.competitionService.registerMember(this.competitionDetails?.id, memberId)
      .subscribe(
        (res) => {
            alert("member has been saved");
        }
      )
    }

 }

}
