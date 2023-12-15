import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Level } from 'src/app/models/level';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-create-level',
  templateUrl: './create-level.component.html',
  styleUrls: ['./create-level.component.css']
})
export class CreateLevelComponent {
  newLevel: Level = {
    id:0,
    description: '',
    points: 0
  };
  // showSuccessToast(): void {
  //   this.toastService.showSuccess('Registration is allowed until 24 hours before the competition start');
  // }


  constructor(private levelService: LevelService, private router: Router) {}

  createLevel(): void {
    this.levelService.saveLevel(this.newLevel).subscribe(
      (createdLevel) => {
        console.log('Level created successfully:', createdLevel);
        
        // this.showSuccessToast(); 
        this.router.navigate(['/levels']);
      },
      (error) => {
        console.error('Error creating level:', error);
      }
    );
  }
}
