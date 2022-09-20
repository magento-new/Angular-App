import { Component, OnInit } from '@angular/core';
import { BillingService } from 'src/app/service/billing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
location:any;
  constructor(private router: Router,
    private api: BillingService) { }

  ngOnInit(): void {
    this.location=this.api.getlocationDetails();
    console.log( this.location)
  }
  addLocationr() {
    
    this.router.navigate(['/billing/addlocation']);
}
}
