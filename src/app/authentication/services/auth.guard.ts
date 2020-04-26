import { isUserSignedIn } from './../store/authentication.selectors';
import { Store } from '@ngrx/store';
import { IAppState } from './../../store/app.state';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private store: Store<IAppState>
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let isSignedIn = this.store.select(isUserSignedIn);
      console.log('isSignedIn', isSignedIn);

      if(isSignedIn) {
        return true;    
      } else {
        this.router.navigate(['/signin']);
        return false;
      }
  }
  
}
