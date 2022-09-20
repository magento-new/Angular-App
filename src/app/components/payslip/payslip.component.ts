import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.scss']
})
export class PayslipComponent implements OnInit {
  addemployee:boolean=false;
  listemployee:boolean=true;
  paySlipData:any;
  constructor(private api : ApiService) { }

  ngOnInit(): void {

  }
  listchange(){
    this.addemployee= false;
    this.listemployee =true
  }
  addchange(){
    this.api.getPaySlip()
    .subscribe({
      next:(res:any)=>{        
     this.paySlipData=res;
     console.log(this.paySlipData)
      },
      error:()=>{
        alert('No Data')
      }
    })
  
    this.addemployee= true;
    this.listemployee =false
  }

}
