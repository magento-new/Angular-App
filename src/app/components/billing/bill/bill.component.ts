import { Component, OnInit } from '@angular/core';
import { BillingService } from 'src/app/service/billing.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  userType:string;
  userDetails:any;
 bill:any;
  constructor(private router: Router,
    private api: BillingService,
    private _user: LoginService) { }

  ngOnInit(): void {
    this.userDetails=this._user.getUserDetails();
    this.userType=this.userDetails.userType;
    this.bill=this.api.getBillDetails();
    console.log( this.bill)
  }
  onReqAdmin(i:any){
    if(this.bill[i].status!='Approved'){
      alert("Approved Successfully")
    }
    this.api.approveBill(i);
   
  }

}
