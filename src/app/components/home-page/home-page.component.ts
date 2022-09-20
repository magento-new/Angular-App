import { Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';
import { NotificationService } from 'src/app/service/notification.service'; 
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  openPanel = false;
  userType : any;
  isBatchdisabled:Boolean = false;
  batchCount: number = 0;
  getbatchValue : Subscription;
  subscriptionObj: Subscription;
  // @Input() showAllDetails: Boolean;

  constructor(private notificationservice: NotificationService, private router : Router, private route: ActivatedRoute, private loginservice : LoginService){}

ngOnInit(): void {
   this.getbatchValue =this.notificationservice.incrementSubject.subscribe((count:number) => {
    this.batchCount= count;
   } );
  console.log("batchvalue",this.getbatchValue);
  this.route.data.subscribe(data=>{
  this.userType=data;
  console.log("userType",this.userType);

})

}
ngOnDestroy(): void {
  this.subscriptionObj.unsubscribe();
}
ngAfterViewChecked(): void {
   if(this.router.url=='/login' || this.router.url=='/registration')
  {
    //console.log('viewafter viw home',this.router.url);
  }
  else{
  console.log('viewafter viw home');
  this.subscriptionObj= this.loginservice.userTypeSubject.subscribe(usertype =>{
   // console.log("userType in home component",usertype);
    this.userType = usertype;
  })
  
  }
}
getuserType(){
  console.log("userType in guest----? component");
  }
  toggle(){
    console.log('open sidenav');
    if(this.router.url=='/login')
    {
      alert("Login (or) signup to access the app");
    }
    else    
    this.openPanel = !this.openPanel
  }
  openModal()
  {
  alert("Welcome to Dashboard..!!");
  this.notificationservice.incrementBadgeValue(this.batchCount-1);
   this.getbatchValue =this.notificationservice.incrementSubject.subscribe((count:number) => {
    this.batchCount= count;
    if(this.batchCount == 0) {
     this.isBatchdisabled=true;
    }
    else{
       this.isBatchdisabled=false;
    }
   } );
  
  }
  }


