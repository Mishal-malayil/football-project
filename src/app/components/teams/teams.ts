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


 teams: any[] = [];   // store team list

constructor(private team: Team) {
  this.loadTeams();
}

loadTeams() {
  this.team.getTeams().subscribe((res: any) => {
    console.log("Loaded teams = ", res);
    this.teams = res;     // store response in teams[]
  });
}

  }


