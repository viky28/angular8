import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, RouteReuseStrategy } from '@angular/router';
import { AuthenticationService } from '../_services';

@Injectable({providedIn:"root"})
export class AuthGuard implements CanActivate{
    constructor(private router: Router, private authenticationservice:AuthenticationService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const currentUser = this.authenticationservice.currentUserValue;
        if(currentUser){
            return true;
        }
        this.router.navigate(['/login'], {queryParams:{returnUrl:state.url}});
        return false;
    }
}