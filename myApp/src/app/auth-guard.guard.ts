import { Injectable, NgZone } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthentService } from 'src/app/services/authent.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthentService, private route: Router, private ngZone: NgZone) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.auth.getConnectedUser().pipe(map(
          (user: any) => {
              if(!user){
                  this.ngZone.run(() => this.route.navigate(['login']))
              }
              return true;
          }
      ));
    }

}