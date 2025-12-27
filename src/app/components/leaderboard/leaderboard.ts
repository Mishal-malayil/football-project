import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  imports: [],
  templateUrl: './leaderboard.html',
  styleUrl: './leaderboard.css',
})
export class Leaderboard {
leaderboard = [
  {
    TeamName: 'FC Tigers',
    TeamLogo: 'tigers.png',
    Played: 5,
    Won: 4,
    Draw: 1,
    Lost: 0,
    Goals: 12,
    Points: 13
  }
];

}
