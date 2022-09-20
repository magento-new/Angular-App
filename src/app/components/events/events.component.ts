import { Component, Inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventService } from 'src/app/service/event.service';
import { CalendarComponent } from '../calendar/calendar.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  event: Event[] = [];
  eventForm: FormGroup
  eventArray: any;
  selectedDate: any;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private api: ApiService,
    public dialogRef: MatDialogRef<EventsComponent>,
    private cdr: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    //this.cdr.detectChanges();
    //this.selectedDate = 
    this.eventForm = this.fb.group({
      scheduleTime: [this.data.event.scheduleTime],
      eventName: [this.data.event.eventName]
    })
    console.log(this.data);
  }

  onSubmit() {
    let Obj: any = {};
    Obj.scheduleTime = this.eventForm.controls['scheduleTime'].value
    Obj.eventName = this.eventForm.controls['eventName'].value
    Obj.selectionType = this.data.event.selectionType
    Obj.id = this.data.event.id
    if (this.eventForm.controls['eventName'].value) {
      if (this.data.event.id) {
        this.api.updateEvent(Obj.id, Obj).subscribe(
          (res: any) => {
            console.log(res.data);
            this.eventArray = res.data
            console.log("Event array-->", res.data);
          });
        this.dialogRef.close({ event: Obj });
      } else {
        this.api.postEvent(Obj).subscribe(
          (res: any) => {
            console.log(res.data);
            this.eventArray = res.data
            console.log("Event array-->", res.data);
          });
        this.dialogRef.close({ event: Obj });
      }
    }else{
      alert("Please Enter Event name")
    }
  }

  onCancel() {
    const empty = {}
    this.dialogRef.close({ event: empty });
  }
}
