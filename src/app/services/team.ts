import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class Team {

  addteamapiUrl = "http://localhost/football_api/add_team.php";
  getteamapiUrl ="http://localhost/football_api/get_teams.php";

  constructor(private http: HttpClient) {}

  addTeam(data: FormData): Observable<any> {
    return this.http.post(`${this.addteamapiUrl}/add_team.php`, data);
  }

  getTeams(): Observable<any> {
    return this.http.get(`${this.getteamapiUrl}/get_teams.php`);
  }
}


