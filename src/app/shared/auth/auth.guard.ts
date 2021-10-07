import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from '../service/storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private _router: Router,
        private _storageService: StorageService,
    ) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this._storageService.isUserLoggedIn()) {
            return true;
        } else {
            this._router.navigateByUrl("/login");
            return false;
        }
    }

}
