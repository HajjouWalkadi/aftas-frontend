import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fish } from 'src/app/models/fish';
import { Level } from 'src/app/models/level';
import { FishService } from 'src/app/services/fish.service';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-list-fish',
  templateUrl: './list-fish.component.html',
  styleUrls: ['./list-fish.component.css']
})
export class ListFishComponent implements OnInit{
  fishes: Fish[] = [];

  constructor(private fishService: FishService) {}

  ngOnInit(): void {
    this.loadFishes();
  }

  loadFishes(): void {
    this.fishService.getAllFish().subscribe(
     
      fishes => this.fishes = fishes,
      fishes =>   console.log('Fish Data:',fishes),
    
      // error => console.log(error),
      
    );
  }

  viewFish(id: number): void {
    console.log(`View fish with id ${id}`);
    // Add navigation logic if needed
  }

  editFish(id: number): void {
    console.log(`Edit fish with id ${id}`);
    // Add navigation logic if needed
  }



  // deleteFish(id: number): void {
  //   this.fishService.deleteFish(id).subscribe(
  //     () => {
  //       console.log(`level with code ${id} deleted successfully.`);
       
  //       this.loadFishes();
  //     },
  //     (error) => {
  //       console.error(`Error deleting level with code ${id}:`, error);
  //     }
  //   );
  // }



}
