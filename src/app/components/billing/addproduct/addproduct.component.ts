import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillingService } from 'src/app/service/billing.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  productForm: FormGroup;
  constructor(private router: Router,
    private api: BillingService,
    private formBuilder: FormBuilder, ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      qrcode: ['', [Validators.required]],
      price: ['', [Validators.required]],
      stack: ['', [Validators.required]],
      location: ['', [Validators.required]], 
      description: ['', [Validators.required]]
    })
    
  }
  save() {
   
    if (this.productForm.valid) {
      this.api.addproductDetails(this.productForm.value);
      alert("Product Saved Successfully");
      this.router.navigate(['/billing/product']);
    }else{
      alert("Please fill Required Details")
    }
  }

}

