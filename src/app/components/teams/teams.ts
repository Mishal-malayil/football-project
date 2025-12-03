import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class Teams implements OnInit {


  teams: any[] = [];

  constructor(private teamService: Team) {}

  ngOnInit() {
    this.loadTeams();
  }

  loadTeams() {
    this.teamService.getTeams().subscribe({
      next: (data: any) => {
        this.teams = data;
        console.log("Teams Loaded:", data);
      },
      error: (err) => {
        console.error("Error loading teams", err);
      }
    });
  }
  
}


