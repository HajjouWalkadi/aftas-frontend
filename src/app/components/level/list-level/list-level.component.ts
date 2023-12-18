import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-list-level',
  templateUrl: './list-level.component.html',
  styleUrls: ['./list-level.component.css']
})
export class ListLevelComponent implements OnInit{

  levels: Level[] = [];

  constructor(private levelService: LevelService) {}

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

  viewLevel(id: number): void {
    console.log(`View level with code ${id}`);
    // Implement the view functionality as needed
  }

  editLevel(id: number): void {
    console.log(`Delete level with code ${id}`);
  }
  // deleteLevel(id: number): void {
  //   this.levelService.deleteLevel(id).subscribe(
  //     () => {
  //       console.log(`level with code ${id} deleted successfully.`);
       
  //       this.loadLevels();
  //     },
  //     (error) => {
  //       console.error(`Error deleting level with code ${id}:`, error);
  //     }
  //   );
  // }
}
