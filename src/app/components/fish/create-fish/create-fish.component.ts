import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fish } from 'src/app/models/fish';
import { Level } from 'src/app/models/level';
import { FishService } from 'src/app/services/fish.service';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-create-fish',
  templateUrl: './create-fish.component.html',
  styleUrls: ['./create-fish.component.css']
})
export class CreateFishComponent implements OnInit {
  newFish: Fish = {
    id: 0,
    name: '',
    averageWeight: 0,
    level: {
      id: 0, // Initialize level.id
      description: '',
      points: 0
    }
  };
  levels: Level[] = [];

  constructor(
    private fishService: FishService,
    private levelService: LevelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLevels();
  }

  loadLevels(): void {
    this.levelService.getAllLevels().subscribe(
      (levels) => {
        this.levels = levels.data;
      },
      (error) => {
        console.error('Error loading levels:', error);
      }
    );
  }

  createFish(): void {
    console.log('newFish:', this.newFish);
    this.fishService.saveFish(this.newFish).subscribe(
      (createdFish) => {
        console.log('Fish created successfully:', createdFish);
        this.router.navigate(['/fishes']);
      },
      (error) => {
        console.error('Error creating fish:', error);
      }
    );
  }


}
