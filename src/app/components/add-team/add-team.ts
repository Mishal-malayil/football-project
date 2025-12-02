import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { Team } from '../../services/team';

@Component({
  selector: 'app-add-team',
  standalone: true,
  templateUrl: './add-team.html',
  styleUrls: ['./add-team.css'],
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CommonModule
  ]
})
export class AddTeam {


  
    TeamName:string='';
    TeamManager:string='';
    TotalPlayers:number |null=null;
    TeamLogo:File | null=null;



    previewLogo: string | ArrayBuffer | null = null;

    constructor(private team: Team) {}

     OnLogoSelected(event: any) {
    this.TeamLogo = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.previewLogo = reader.result;
    };
    
  }

   onSubmit() {
    if (!this.TeamName || !this.TeamManager || !this.TotalPlayers || !this.TeamLogo) {
      alert("All fields are required!");
      return;
    }


    const formData = new FormData();

formData.append('team_name', this.TeamName);
formData.append('team_manager', this.TeamManager);
formData.append('total_players', this.TotalPlayers.toString());
formData.append('team_logo', this.TeamLogo);
  


    this.team.addTeam(formData).subscribe(
      (response: any) => {
        console.log("Team added successfully:", response);
        alert("Team added successfully!");
        this.resetForm();
      },
      (error) => {
        console.error("Error adding team:", error);
        alert("Error adding team!");
      }
    );
  }
     resetForm() {
    this.TeamName = '';
    this.TeamManager = '';
    this.TotalPlayers = null;
    this.TeamLogo = null;
    this.previewLogo=null;
  }

  };

   

    

  
  

