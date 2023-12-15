import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competition } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition.service';
import { HuntingService } from 'src/app/services/hunting.service';

@Component({
  selector: 'app-list-competition',
  templateUrl: './list-competition.component.html',
  styleUrls: ['./list-competition.component.css']
})
export class ListCompetitionComponent implements OnInit{
  competitions: Competition[] = [];
  filteredCompetitions: Competition[] = [];
  selectedStatus: string | null = null;

  constructor(
    private competitionService: CompetitionService,
    private router: Router,
   // private toastService: ToastService,
    //private rankingService: RankingService,
    private huntingService: HuntingService
  ) { }

  ngOnInit(): void {
    this.loadCompetitions();
  }

  // showSuccessToast(): void {
  //   this.toastService.showSuccess('Competition deleted successfully.');
  // }

  loadCompetitions(): void {
    this.competitionService.getAllCompetitions().subscribe(
      competitions => {
       

        // Set the filteredCompetitions initially to all competitions
        this.filteredCompetitions = competitions.data;
        console.log(  this.filteredCompetitions)
      },
      error => console.log(error)
    );
  }

  getCompetitionStatus(date: Date): string {
    // Compare the competition date with the current date
    const currentDate = new Date();
    const competitionDate = new Date(date);

    if (competitionDate < currentDate) {
      return 'Closed';
    } else if (competitionDate.toDateString() === currentDate.toDateString()) {
      return 'In Progress';
    } else {
      return 'Upcoming';
    }
  }

  
  viewCompetitionDetails(competitionId: number): void {
    this.router.navigate(['/competitions/view', competitionId]);
  }
  

  editCompetition(id: number): void {
    this.router.navigate(['/competitions/update/', id]);
    console.log(`Edit competition with id ${id}`);
  }

  redirectToGetRankingsByCompetition(competitionId: number): void {
    this.router.navigate(['/rankings/view', competitionId]);
    console.log(` RankingsByCompetition with id ${competitionId}`);
  }
  // deleteCompetition(id: number): void {
  //   this.competitionService.deleteCompetition(id).subscribe(
  //     () => {
  //       console.log(`Competition deleted successfully.`);
  //       this.loadCompetitions();
  //       this.showSuccessToast();
  //     },
  //     (error) => {
  //       console.error(`Error deleting competition with id ${id}:`, error);
  //     }
  //   );
  // }

  updateFilteredCompetitions(): void {
    if (this.selectedStatus) {
      this.filteredCompetitions = this.competitions.filter(comp => comp.status === this.selectedStatus);
    } else {
      this.filteredCompetitions = this.competitions;
    }
  }

  calculateAndAssignScores(competitionId: number): void {
    this.huntingService.calculateAndAssignScores(competitionId).subscribe(
      (response) => {
        console.log(response);
        this.loadCompetitions(); 
      },
      (error) => console.log(error)
    );
  }

  currentPage = 1;
  itemsPerPage = 5; 
 get totalPages(): number {
     return Math.ceil(this.competitions.length / this.itemsPerPage);
   }
   // Method to get competitions for the current page
   get paginatedCompetitions(): Competition[] {
     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
     return this.competitions.slice(startIndex, startIndex + this.itemsPerPage);
   }

}
