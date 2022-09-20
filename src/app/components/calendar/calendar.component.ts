import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventsComponent } from '../events/events.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  selectedDate: any;
  task:string
  id: any = 0;
  scheduledList: any = [];
  constructor(public dialog: MatDialog,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getEvent();
  }
  getEvent(){
    this.api.getEvent().subscribe(
      (res: any) => {
        console.log(res.data);
        this.scheduledList = res
        console.log("Event array-->", res.data);
      });
  }

  onSelect(event:any){
  let evt = {};
    if (event.hasOwnProperty('eventName')) {
        evt = {
        scheduleTime:event.scheduleTime,
        eventName:event.eventName,
        selectionType: 'edit',
        id: event.id
        }
    } else {
        evt = {
        scheduleTime:event,
        eventName: '',
        selectionType: 'new'
    }
    }

    this.selectedDate= event;
    const dialogRef = this.dialog.open(EventsComponent, {
      width: '400px',
      data: {event: evt},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.task = result;
      if (result.event.selectionType == 'new') {
            this.id = this.id + 1;
             result.event.id = this.id;
             this.scheduledList.push(result.event);
      } else if (result.event.selectionType == 'edit') {
          this.scheduledList.map((val: any,key: any) => {
          if (val.id == result.event.id) {
              val.scheduleTime = result.event.scheduleTime;
              val.eventName = result.event.eventName;
          }
          });
      }
    });
  }
  onDelete(eventType: any) {
    if (confirm("Are you sure to delete Event " + eventType.eventName)) {
      this.api.deleteEvent(eventType.id).subscribe(
        (res: any) => {
          console.log(res.data);
          alert(eventType.eventName + " Event deleted successfully")
          this.getEvent();
          console.log("Event array-->", res.data);
        });
     
      console.log("Implement delete functionality here");
    }
     
    // this.scheduledList.map((val: any,key: any) => {
    //       if (val.id == eventType.id) {
    //         this.scheduledList.splice(key,1);
    //       }
    //       });
  }
}


