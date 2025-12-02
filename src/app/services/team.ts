import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class Team {

  apiUrl = "http://localhost/football_api";

  constructor(private http: HttpClient) {}

  addTeam(data: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_team.php`, data);
  }

  getTeams(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_teams.php`);
  }
}


