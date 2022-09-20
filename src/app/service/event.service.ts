import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../model/event.model';

@Injectable({
    providedIn: 'root'
})

export class EventService {
    constructor(private http: HttpClient) { }

    addEvent(eventObj: Event): Observable < Event > {
        console.log("service---",eventObj);
        
        return this.http.post<Event>(
            'api/event',
            {eventObj},
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        )
    }
}
