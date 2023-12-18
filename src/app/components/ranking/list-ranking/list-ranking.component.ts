import { Component } from '@angular/core';
import { Competition } from 'src/app/models/competition';
import { Ranking } from 'src/app/models/ranking';
import { CompetitionService } from 'src/app/services/competition.service';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
  selector: 'app-list-ranking',
  templateUrl: './list-ranking.component.html',
  styleUrls: ['./list-ranking.component.css']
})
export class ListRankingComponent {
  rankings: any[] = [];
  competitions:Competition[] = [];
  selectedCompetitionId:number = 0;

  constructor(private resultsService: RankingService,private competitionService:CompetitionService) {}

  ngOnInit(): void {
    this.loadCompetitions();
  }

  submitHunting(): void {
    console.log(this.selectedCompetitionId);
    this.resultsService.getResults(this.selectedCompetitionId).subscribe(
      (respoonse: any) => {
        this.rankings = respoonse.data;
      },
      error => console.error(error)
    );
  }
    loadCompetitions(): void {
      this.competitionService.getAllCompetitions().subscribe(
        competitions => {
         
  
          this.competitions = competitions.data;
        },
        error => console.log(error)
      );
    }
  }
