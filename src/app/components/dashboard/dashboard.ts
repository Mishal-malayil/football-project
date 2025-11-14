import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private router: Router) {}

  go(path: string) {
    this.router.navigate([path]);
  }
}
