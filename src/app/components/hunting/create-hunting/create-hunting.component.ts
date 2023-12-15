import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Competition } from 'src/app/models/competition';
import { Fish } from 'src/app/models/fish';
import { Hunting } from 'src/app/models/hunting';
import { Member } from 'src/app/models/member';
import { CompetitionService } from 'src/app/services/competition.service';
import { FishService } from 'src/app/services/fish.service';
import { HuntingService } from 'src/app/services/hunting.service';
import { RankingService } from 'src/app/services/ranking.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-create-hunting',
  templateUrl: './create-hunting.component.html',
  styleUrls: ['./create-hunting.component.css']
})
export class CreateHuntingComponent implements OnInit {
  huntingForm: FormGroup;

  competitions: Competition[] = [];
  members: Member[] = [];
  fishes: Fish[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private huntingService: HuntingService,
    private competitionService: CompetitionService,
    private rankingService: RankingService,
    private fishService: FishService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.huntingForm = this.formBuilder.group({
      memberNum: ['', Validators.required],
      competitionId: ['', Validators.required],
      numberOfFish: [1, Validators.required],
      fishId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //this.loadCompetitions();
    this.loadFishes();
  }

  // loadCompetitions(): void {
  //   const today = new Date();
  //   this.competitionService.getAllCompetitions().subscribe(
  //     (competitions) => {
  //       this.competitions = competitions.filter(comp => {
  //         const compDate = new Date(comp.date);
  //         return compDate.getFullYear() === today.getFullYear() &&
  //           compDate.getMonth() === today.getMonth() &&
  //           compDate.getDate() === today.getDate();
  //       });

  //       if (this.competitions.length > 0) {
  //         this.loadMembers(this.competitions[0].id);
  //       }
  //     },
  //     (error) => {
  //       console.error('Error loading competitions:', error);
  //     }
  //   );
  // }

  loadMembers(competitionId: number): void {
    this.rankingService.getAllMembersByCompetition(competitionId).subscribe(
      (members) => {
        this.members = members;
      },
      (error) => {
        console.error('Error loading members:', error);
      }
    );
  }

  loadFishes(): void {
    this.fishService.getAllFish().subscribe(
      (fishes) => {
        this.fishes = fishes;
      },
      (error) => {
        console.error('Error loading fishes:', error);
      }
    );
  }

 
  createHunting(): void {
    if (this.huntingForm.valid) {
      // Create an instance of the Hunting type
      const newHuntingData: Hunting = {
        id: 0, // You can set this to 0 or some default value
        memberNum: this.huntingForm.value.memberNum,
        competitionId: this.huntingForm.value.competitionId,
        numberOfFish: this.huntingForm.value.numberOfFish,
        fishId: this.huntingForm.value.fishId,
      };
  
      // Call the service to save the hunting entry
      this.huntingService.saveHunting(newHuntingData).subscribe(
        (createdHunting) => {
          console.log('Hunting created successfully:', createdHunting);
          this.router.navigate(['/hunting']);
        },
        (error) => {
          console.error('Error creating hunting:', error);
        }
      );
    }
  }


}
