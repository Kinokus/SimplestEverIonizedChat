import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class MessagesService {

    sendMessage(message) {
        return this.http.post(`message`, {message: message}).toPromise();
        // return this.http.post(`${window.location.hostname}:3000/message`, {message: message}).toPromise();
    }

    constructor(private http: HttpClient, private router: Router, private loc: Location) {

    }
}
