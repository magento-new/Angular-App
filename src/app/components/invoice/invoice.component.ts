import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {jsPDF} from 'jspdf';
import { ExcelService } from 'src/app/service/excelservice';
import { BillingService } from 'src/app/service/billing.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  // invoice = [
  //   {
  //     companyname: 'Amazon',
  //     address: "abc town",
  //     state: "500",
  //     amount: "10000",
  //     description: "invoice component",
  //     unitcost: "1000",
  //     QTY: "3",
  //     subtotal: "1000",
  //     discount: "20%",
  //     GST: "20",
  //     CGST: "50",
  //     Total: "5000"
  //   }
  // ]
  invoice:any=[];
  invoiceDetails:any=[];
  constructor(private excelService:ExcelService,
    private api: BillingService,) { }

  ngOnInit(): void {
    this.invoiceDetails=this.api.getInvoiceDetails();
  }
  @ViewChild('content', {static: false}) content: ElementRef;


  downloadPDF() {
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
    

    doc.save('test.pdf');
  }
  onChange(val:any){
   this.invoice= this.invoiceDetails.find((e:any)=>e.invoiceNum==val.target.value)
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.invoice, 'sample');
  }
}
