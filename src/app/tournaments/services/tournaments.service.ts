import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Tournament } from './../models/tournament.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournamentsService {

  tournamentsUrl = `${environment.apiUrl}tournaments.json`;

  constructor(private http: HttpClient) { }

  GetTournaments(): Observable<TournamentHttp> {
    return this.http.get<TournamentHttp>(this.tournamentsUrl);
  }

}

export interface TournamentHttp {
  tournaments: Tournament[];
}
