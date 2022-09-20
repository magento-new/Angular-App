import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, ReplaySubject, Subject } from "rxjs";
@Injectable({
providedIn : 'root'
})

export class NotificationService{
 badgeCount :number = 0;

 incrementSubject = new BehaviorSubject<number>(this.badgeCount);

 incrementBadgeValue(value : number){
  
  return this.incrementSubject.next(value);

 }
}