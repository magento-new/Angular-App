import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BillingService } from 'src/app/service/billing.service';

@Component({
  selector: 'app-addinvoice',
  templateUrl: './addinvoice.component.html',
  styleUrls: ['./addinvoice.component.scss']
})
export class AddinvoiceComponent implements OnInit {

  invoiceForm: FormGroup;
  constructor(private router: Router,
    private api: BillingService,
    private formBuilder: FormBuilder, ) { }

  ngOnInit(): void {
    this.invoiceForm = this.formBuilder.group({
      invoiceNum: ['', [Validators.required]],
      from: ['', [Validators.required]],
      fromAddress: ['', [Validators.required]],
      fromPhone: ['', [Validators.required]],
      to: ['', [Validators.required]],
      toAddress: ['', [Validators.required]],
     toPhone: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      price: ['', [Validators.required]],
      qty: ['', [Validators.required]],
      gst: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      date: ['', [Validators.required]],
    })
    
  }
  save() {
   
    if (this.invoiceForm.valid) {
      this.api.addInvoiceDetails(this.invoiceForm.value);
      alert("Invoice Saved Successfully");
      this.router.navigate(['/invoice']);
    }else{
      alert("Please fill Required Details")
    }
  }

}
