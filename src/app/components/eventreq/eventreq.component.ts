import { Component, OnInit } from '@angular/core';
import { EventsComponent } from '../events/events.component';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-eventreq',
  templateUrl: './eventreq.component.html',
  styleUrls: ['./eventreq.component.scss']
})
export class EventreqComponent implements OnInit {
  scheduledList: any = [];
  scheduledListReq: any = [];
  userDetails:any;
  userType:string;
  constructor(private api: ApiService,
    private _user: LoginService) { }

  ngOnInit(): void {   
    this.userDetails=this._user.getUserDetails();
    this.userType=this.userDetails.userType;
    if(this.userType=='employee'){
      this.getEvent();
    }
    if(this.userType=='admin'){
      this.getEventReq();
    }
    console.log(this.userDetails)
  }
  getEventReq(){
    this.api.getEventReq().subscribe(
      (res: any) => {
        console.log(res);
        this.scheduledListReq = res       
      });
     
  }
  getEvent(){
    this.api.getEvent().subscribe(
      (res: any) => {
        console.log(res.data);
        this.scheduledList = res
        console.log("Event array-->", res.data);
        this.scheduledList.forEach((element:any,index:any) => {
          this.scheduledList[index].reqStatus="Not Request";
          
        });
      });
     
  }

  onReq(event:any,index:any){
    this.scheduledList[index].reqStatus="Pending";   
    event.reqStatus="Pending"; 
    event.reqBy=this.userDetails.username;   
    this.api.reqEvent(event).subscribe(
      (res: any) => {
        alert("Event Request send to Admin");            
      });
  }

  onReqAdmin(event:any,index:any){
    this.scheduledListReq[index].reqStatus="Approved";   
    event.reqStatus="Approved"; 
    this.api.updateEventReq(event.id,event).subscribe(
      (res: any) => {
        alert("Event Approved");
        //this.scheduledList = res;         
      });
  }

}
