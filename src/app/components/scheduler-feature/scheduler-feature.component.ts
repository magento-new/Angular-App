import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { EventScheduler } from './EventScheduler';

@Component({
  selector: 'app-scheduler-feature',
  templateUrl: './scheduler-feature.component.html',
  styleUrls: ['./scheduler-feature.component.scss']
})
export class SchedulerFeatureComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getEvents();
  }
  addEvent= false;
  showOneOnOneForm= false;
  scheduledEvents=true;
  scheduled=false;
  emptyevents=false;
  scheduledEventsDetails:any;
  eventScheduler: EventScheduler;
  eventForm(){
  this.addEvent=true;
  this.scheduledEvents=false;
  }

  oneOnOne(){
    this.showOneOnOneForm= true;
  }
  back(){
    this.scheduledEvents= true;
    this.addEvent=true;
    this.showOneOnOneForm=false;
    this.addEvent=false;
    this.scheduled=false;
    this.getEvents();
  }

  submit(value: any) {
    this.scheduled = true;
    this.eventScheduler = value;
    this.api.saveData(this.eventScheduler).subscribe({
      next: (value: any) => {
        this.scheduledEventsDetails = value;
        console.log(this.scheduledEventsDetails);
      },
    })
    error:()=>{
      alert('No Data')
    }
  }
  getEvents() {
    this.scheduledEvents = true;
    this.api.getData().subscribe({
      next: (res: any) => {
        this.scheduledEventsDetails = res;
        // for (var i = 0; i <= this.scheduledEventsDetails.length; i++) {
        //   this.scheduledEventsDetails[i] = [{
        //     'userName': res[i].userName,
        //     'eventName': res[i].eventName,
        //     'eventLink': res[i].eventLink,
        //     'description': res[i].description,
        //     'date': res[i].date,
        //     'fromTime': res[i].fromTime,
        //     'toTime': res[i].toTime,
        //     'email': res[i].email,
        //     'location': res[i].location
        //   }]
        // }
      }
    })

    error: () => {
      this.emptyevents=true;
      alert('No Data');
    }
  }
}
