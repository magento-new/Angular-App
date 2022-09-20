import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillingService } from 'src/app/service/billing.service';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.scss']
})
export class AddlocationComponent implements OnInit {
  locationForm: FormGroup;
  
  
  constructor(private router: Router,
    private api: BillingService,
    private formBuilder: FormBuilder, ) { }

  ngOnInit(): void {
    this.locationForm = this.formBuilder.group({
      Name: ['', [Validators.required]],
      Address: ['', [Validators.required]]
    })
    
  }
  save() {
   
    if (this.locationForm.valid) {
      this.api.addLocationDetails(this.locationForm.value);
      alert("Location Saved Successfully");
      this.router.navigate(['/billing/location']);
    }else{
      alert("Please fill Required Details")
    }
  }

}
