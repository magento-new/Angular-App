import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BillingService {
  mockLocationList: Array<any> = [
    {
      Name: 'Chennai',
      Address: 'Test Address1',
    },
    {
      Name: 'Bangalore',
      Address: 'Test Address2',
    },
    {
      Name: 'Mysore',
      Address: 'Test Address3',
    },
  ]

  mockProductList: Array<any> = [
    {
      name: 'Product 1',
      code: 'PRO1',
      qrcode: '12ff2232323',
      price: '10',
      stack: '25',
      location: 'Chennai',
      description: 'Test product',
    },
    {
      name: 'Product 2',
      code: 'PRO2',
      qrcode: '12ff32f323',
      price: '100',
      stack: '49',
      location: 'Chennai',
      description: 'Test product',
    },
    {
      name: 'Product 3',
      code: 'PRO13',
      qrcode: 'sadf2232323',
      price: '50',
      stack: '50',
      location: 'Mysore',
      description: 'Test product3',
    },
  ]
  mockBillList: Array<any> = [
    {
      date: '10-03-2022',
      name: "Test Shop1",
      qty: '20',
      amount: 4000,
      paymentMode: 'Cash',
      CreatedBy: 'Ram',
      status: 'Pending'
    },
    {
      date: '18-01-2022',
      name: "Test Shop2",
      qty: '12',
      amount: 4340,
      paymentMode: 'Card',
      CreatedBy: 'Ravi',
      status: 'Pending'
    },
    {
      date: '10-11-2021',
      name: "Test Shop3",
      qty: '17',
      amount: 3432,
      paymentMode: 'Cash',
      CreatedBy: 'Ram',
      status: 'Pending'
    },
  ]
  mockInvoiceList: Array<any> = [
    {
      invoiceNum: 'Invoice0001',
      from: "xzy pvt Ltd",
      fromAddress: "15, ss building,Chennai",
      fromPhone: 3423878232,
      to: 'ABC LTD',
      toAddress: "22 main,Hebbagodi,Bangalore",
      toPhone: 7834567556,
      amount: 4000,
      price: 200,
      qty: 20,
      gst: 400,
      discount: 200,
      date: '10-03-2022'
    },
    {
      invoiceNum: 'Invoice0002',
      from: "Abi pvt Ltd",
      fromAddress: "34, Avenure building,Chennai",
      fromPhone: 983478343,
      to: 'M&M co',
      toAddress: "34 main,Madivala,Bangalore",
      toPhone: 33434,
      amount: 8000,
      price: 250,
      qty: 30,
      gst: 700,
      discount: 300,
      date: '23-03-2022'
    }
  ]

  constructor() { }
  getlocationDetails() {
    return this.mockLocationList;
  }
  addLocationDetails(data: any) {
    this.mockLocationList.push(data)
  }
  getproductDetails() {
    return this.mockProductList;
  }
  addproductDetails(data: any) {
    this.mockProductList.push(data)
  }
  getBillDetails() {
    return this.mockBillList;
  }
  addBillDetails(data: any) {
    this.mockBillList.push(data)
  }
  approveBill(ind: any) {
    this.mockBillList[ind].status = 'Approved'
  }
  getInvoiceDetails() {
    return this.mockInvoiceList;
  }
  addInvoiceDetails(data: any) {
    this.mockInvoiceList.push(data)
  }
}
