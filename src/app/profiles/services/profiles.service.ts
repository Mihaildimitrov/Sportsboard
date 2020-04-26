import { environment } from './../../../environments/environment.prod';
import { Profile } from './../models/profile.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  profilesUrl = `${environment.apiUrl}profiles.json`;

  constructor(private http: HttpClient) { }

  GetProfiles(): Observable<ProfileHttp> {
    return this.http.get<ProfileHttp>(this.profilesUrl);
  }

}

export interface ProfileHttp {
  profiles: Profile[];
}