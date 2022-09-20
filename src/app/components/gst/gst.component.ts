import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {jsPDF} from 'jspdf';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ExcelService } from 'src/app/service/excelservice';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.scss']
})
export class GstComponent implements OnInit {
 gstForm: FormGroup;
 categorys=['Food','Transport','Dress','Electric Item','Medical','Furniture'];
 gstPercent:any;
 category: any='';
 amount: any='';
 gst: any ='';
 totalamount :any ='';

  constructor(private excelService:ExcelService,
    private location: Location,
    private router: Router,
    private formBuilder: FormBuilder) { }
    
    
  ngOnInit(): void {
    this.gstForm = this.formBuilder.group({
      item: ['', [Validators.required]],
      category: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      gst: ['', [Validators.required]],   
     
      totalamount: ['', [Validators.required]]
    })
  }

  save(){

  }
gstCal(){
  console.log(this.category)
  let per:number=0;
  if(this.category=='Food' || this.category=="Dress"){
    per=5;
    this.gstPercent='5%';
  }
  if(this.category=='Transport' || this.category=="Electric Item"){
    per=12;
    this.gstPercent='12%';
  }
  if(this.category=='Medical' ){
    per=18;
    this.gstPercent='18%';
  }
  if(this.category=='Furniture' ){
    per=28;
    this.gstPercent='28%';
  }
  if(this.amount && this.category){
    this.gst= Number(this.amount)*per/100;
    this.totalamount=this.gst+Number(this.amount);
  }
  
}


  GSTR1 = [
    {
      GSTINUINNo: 1,
      PartyName: "Hardik",
      Sale: "500",
      SaleReturn: "100",
      CESSrate: "2.5%",
      Taxablevalue: "20%",
      Totals: "1000"
    },
    {
      GSTINUINNo: 2,
      PartyName: "vino",
      Sale: "500",
      SaleReturn: "100",
      CESSrate: "2.5%",
      Taxablevalue: "20%",
      Totals: "1000"
    },
    {
      GSTINUINNo: 3,
      PartyName: "vijay",
      Sale: "500",
      SaleReturn: "100",
      CESSrate: "2.5%",
      Taxablevalue: "20%",
      Totals: "1000"
    },
  ]


  @ViewChild('content', {static: false}) content: ElementRef;


  downloadPDF() {
    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function (_element: any) {
        return true;
      }
    };

    const content =  this.gstForm.value;

    doc.html(content.innerHTML, {callback: () => {
      doc.output('dataurlnewwindow');
   }});
    

    doc.save('test.pdf');
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.GSTR1, 'sample');
  }

}
