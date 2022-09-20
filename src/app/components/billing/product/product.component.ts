import { Component, OnInit, ViewChild } from '@angular/core';
import { BillingService } from 'src/app/service/billing.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  product:any;
  constructor(private router: Router,
    private api: BillingService) { }

  ngOnInit(): void {
    this.product=this.api.getproductDetails();
    console.log( this.product)
  }
  addproduct() {
    
    this.router.navigate(['/billing/addproduct']);
}
}