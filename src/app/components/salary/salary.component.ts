import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {jsPDF} from 'jspdf';
import { salaryModel } from 'src/app/model/salary.model';
import { ExcelService } from 'src/app/service/excelservice';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {
  salary : salaryModel = new salaryModel();
  salaryForm : FormGroup
  personalno: string = '';
  name: string = '';
  bankaccno: string = '';
  bank: string ='';
  lopdays: any = '';
  dob: string = '';
  pfno: string = '';
  stddays: any = '';
  workingdays: any = '';
  location: string = '';
  designation: string = '';
  department: string = '';
  basic: any='';
  pf: any='';
  houserent: any='';
  tax: any ='';
  specialallowance :any ='';
  incometax :any ='';
  conveyance :any ='';
  ADD :any ='';
  shift :any ='';
  bonus :any ='';
  medical:any ='';
  grossearn:any ='';
  grossdeduction :any ='';
  netpay :any ='';
  banks=['Axis Bank','State Bank of India','ICICI','Indian Bank','IOB Bank'];
  departments=['IT','HR','Finance','Admin']

  constructor(private formBuilder: FormBuilder,
    private api : ApiService,private router : Router,private excelService:ExcelService) { }

  ngOnInit(): void {
    this.salaryForm = this.formBuilder.group({
      personalno :[this.salary.personalno,[Validators.required]],
      name : [this.salary.name,[Validators.required]],
      bank :[this.salary.bank,[Validators.required]],
      bankaccno : [this.salary.bankaccno,[Validators.required]],
      dob : [this.salary.dob,[Validators.required]],
      lopdays : [this.salary.lopdays,[Validators.required]],
      pfno : [this.salary.pfno,[Validators.required]],
      stddays: [this.salary.stddays,[Validators.required]],
      location :[this.salary.location,[Validators.required]],
      workingdays : [this.salary.workingdays,[Validators.required]],
      department :[this.salary.department,[Validators.required]],
      designation : [this.salary.designation,[Validators.required]],
      basic : [this.salary.basic,[Validators.required]],
      pf : [this.salary.pf,[Validators.required]],
      houserent : [this.salary.houserent,[Validators.required]],
      tax: [this.salary.tax,[Validators.required]],
      specialallowance :[this.salary.specialallowance,[Validators.required]],
      incometax : [this.salary.incometax,[Validators.required]],
      conveyance :[this.salary.conveyance,[Validators.required]],
      ADD : [this.salary.ADD,[Validators.required]],
      shift : [this.salary.shift,[Validators.required]],
      bonus : [this.salary.bonus,[Validators.required]],
      medical : [this.salary.medical,[Validators.required]],
      grossearn: [this.salary.grossearn,[Validators.required]],
      grossdeduction :[this.salary.grossdeduction,[Validators.required]],
      netpay : [this.salary.netpay,[Validators.required]],
    })
  }
 
  @ViewChild('content', {static: false}) content: ElementRef;
  badicPay(){
    this.pf= this.basic*12/100;
    this.houserent= this.basic*18/100;
    this.specialallowance= this.basic*10/100;
    this.conveyance= this.basic*25/100;
    this.ADD= this.basic*12/100;
    this.bonus= this.basic*12/100;
    this.medical= this.basic*5/100;
    this.tax= 200;
    this.shift=5000;
    this.grossearn=this.grossearnCal();
    this.incometax=this.grossearn*15/100;
    this.grossdeduction=this.grossDedut();
    this.netpay=this.grossearn-this.grossdeduction;
  }

  grossearnCal(){
    return Number(this.basic)+Number(this.houserent)+Number(this.specialallowance)+
    Number(this.conveyance)+Number(this.ADD)+
    Number(this.bonus)+Number(this.medical)+Number(this.shift);
  }
  grossDedut(){
    return this.pf+this.tax+this.incometax;
  }
  onSubmit()
  {
    if(this.salaryForm.valid){
      const doc = new jsPDF();

      const specialElementHandlers = {
        '#editor': function (_element: any) {
          return true;
        }
      };
  
      const content = this.content.nativeElement;
  
      doc.html(content.innerHTML, {callback: () => {
        doc.output('dataurlnewwindow');
     }});
      
    }

     else
     alert("Please fill all the required Details")

  }
  save(){
    if(this.salaryForm.valid){
      
      this.api.postPaySlip(this.salaryForm.value)
      .subscribe({
        next:(res)=>{
          alert('paySlip Generated Successfully')
        
        },
        error:()=>{
          alert('User form is not valid!!')
        }
      })
    }else{
      alert("Please fill all the required Details")
    }
  }
  exportAsXLSX():void {
    const content = this.content.nativeElement;
    this.excelService.exportAsExcelFile(content, 'sample');
  }
}
