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
    Phone:number |null=null;
    TotalPlayers:number |null=null;
    TeamLogo:File | null=null;



    previewLogo: string | ArrayBuffer | null = null;

    constructor(private team: Team) {}

     OnLogoSelected(event: any) {
  this.TeamLogo = event.target.files[0];

    if (this.TeamLogo) {
    const reader = new FileReader();
    reader.onload = () => {
      this.previewLogo = reader.result;
    };
    reader.readAsDataURL(this.TeamLogo);  // <-- REQUIRED
  }
}
    
  

onSubmit() {
  if (!this.TeamName || !this.TeamManager || !this.Phone|| !this.TotalPlayers || !this.TeamLogo) {
    alert("All fields are required!");
    return;
  }

  const formData = new FormData();
  formData.append('team_name', this.TeamName);
  formData.append('team_manager', this.TeamManager);
  formData.append('phone_num',this.Phone.toString());
  formData.append('total_players', this.TotalPlayers.toString());
  formData.append('team_logo', this.TeamLogo);

  this.team.addTeam(formData).subscribe({
    next: (res: any) => {
      console.log(res);
      alert("Team Added Successfully!");
      this.resetForm();
    },
    error: (err: any) => {
      console.error(err);
      alert("Error adding team!");
    }
  });



  }
     resetForm() {
    this.TeamName = '';
    this.TeamManager = '';
    this.Phone=null;
    this.TotalPlayers = null;
    this.TeamLogo = null;
    this.previewLogo=null;
  }

  };

   

    

  
  

