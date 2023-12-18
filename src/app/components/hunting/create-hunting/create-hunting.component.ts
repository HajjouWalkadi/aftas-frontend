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
import { MemberService } from 'src/app/services/member.service';
import { RankingService } from 'src/app/services/ranking.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-create-hunting',
  templateUrl: './create-hunting.component.html',
  styleUrls: ['./create-hunting.component.css']
})
export class CreateHuntingComponent implements OnInit {
 
  newHunting: Hunting = {
      id: 0,
      memberId:0,
      competitionId:0,
      fishId:0,
      numberOfFish:0,
      averageWeight:0
  
    };
    members: any[] = [];
    competitions: any[] = [];
    fishes: any[] = [];
  
    selectedMember:number =0 ;
    selectedCompetition:number =0 ;
    selectedFish:number =0 ;
  
    successmsg:string='';
  
    constructor(
     
      private router: Router,
      private memberService: MemberService,
      private competitionService: CompetitionService,
      private fishService:FishService,
      private huntingService:HuntingService
  
     
    ) { }
    
  
    ngOnInit(): void {
      this.getMembers();
      this.getCompetitions();
      this.getFishes();
     
    }
    private getMembers(){
      this.memberService. getAllMembers().subscribe((data:any) => {
        this.members = data.data;
        console.log('Members data:', this.members); 
      });
  
    }
    private getCompetitions(){
      this.competitionService. getAllCompetitions().subscribe((data:any) => {
        this.competitions = data.data;
        console.log('Competitions:', this.competitions);
      });
  
    }
    private getFishes(){
      this.fishService. getAllFish().subscribe((data:any) => {
        this.fishes = data.data;
        console.log(data)
      });
  
    }
  
    createHunting(): void {
  
      this.newHunting.memberId = this.selectedMember;
      this.newHunting.competitionId = this.selectedCompetition;
      this.newHunting.fishId = this.selectedFish;
  
        // console.log(`View member with number ${rankingData}`);
        this.huntingService.saveHunting(this.newHunting).subscribe(
          (createdHunting) => {
            this.successmsg="Hunting created successfully";
            console.log('Hunting  created successfully:', createdHunting);
            
          },
          (error) => {
            console.error('Error creating Hunting :', error);
          }
        );
      
    }
  
  

}
