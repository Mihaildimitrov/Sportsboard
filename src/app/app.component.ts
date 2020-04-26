import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  isUserSignedIn$: Observable<boolean> = this.authenticationService.isUserSignedIn$;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.getUserAuthenticationState();
  }

  ngOnInit() {}

}
