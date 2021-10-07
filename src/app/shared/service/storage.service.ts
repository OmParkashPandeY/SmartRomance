import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class StorageService {

    private subject = new Subject<any>();


    public setLoginUserDetails(data: any = null) {
        localStorage.setItem('isUserLoggedIn', '1');
        localStorage.setItem('user', JSON.stringify(data));
    }

    public isUserLoggedIn() {
        if (localStorage.getItem('isUserLoggedIn') == "1") {
            return true;
        }
        return false;
    }




    sendClickEvent() {
        this.subject.next();
    }


    getClickEvent(): Observable<any> {
        return this.subject.asObservable();
    }
}


