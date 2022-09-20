import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BillingService } from 'src/app/service/billing.service';

@Component({
  selector: 'app-generatebill',
  templateUrl: './generatebill.component.html',
  styleUrls: ['./generatebill.component.scss']
})
export class GeneratebillComponent implements OnInit {
  billForm: FormGroup;
  constructor(private router: Router,
    private api: BillingService,
    private formBuilder: FormBuilder, ) { }

  ngOnInit(): void {
    this.billForm = this.formBuilder.group({
      date: ['', [Validators.required]],
      name: ['', [Validators.required]],
      qty: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      paymentMode: ['', [Validators.required]],
      CreatedBy: ['', [Validators.required]],
      status: ['Pending']
    })
    
  }
  save() {
   
    if (this.billForm.valid) {
      this.api.addBillDetails(this.billForm.value);
      alert("Bill Saved Successfully");
      this.router.navigate(['/billing/bill']);
    }else{
      alert("Please fill Required Details")
    }
  }

}
