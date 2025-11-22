import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

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

  team = {
    name: '',
    manager: '',
    players: 0,
    logo: ''
  };

  previewLogo: string | ArrayBuffer | null = null;

  onLogoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewLogo = reader.result;
        this.team.logo = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    console.log('Team Added:', this.team);
    alert('Team added successfully!');
  }
}
