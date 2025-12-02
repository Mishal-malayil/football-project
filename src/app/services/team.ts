import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Team {
  apiUrl = 'http://localhost/football_api';

  constructor(private http: HttpClient) {}

  addTeam(data: FormData) {
  return this.http.post(this.apiUrl + 'add_team.php', data);
}

  getTeams() {
    return this.http.get(this.apiUrl+ 'get_teams.php');
  }
}

