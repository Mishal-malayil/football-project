import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Team } from '../../services/team';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [MatIconModule,CommonModule,MatCardModule],
  templateUrl: './teams.html',
  styleUrl: './teams.css',
})
export class Teams {
teams:any[]=[];

 constructor() {
    this.loadTeams();
  }

  // Load from localStorage
  loadTeams() {
    const savedTeams = localStorage.getItem('teams');
    if (savedTeams) {
      this.teams = JSON.parse(savedTeams);
    } else {
      // Optional: Default teams when no data
      this.teams = [
        {
          
        },
        {
        
        }
      ];
    }
  }

}
