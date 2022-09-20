import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provisional-fund',
  templateUrl: './provisional-fund.component.html',
  styleUrls: ['./provisional-fund.component.scss']
})
export class ProvisionalFundComponent implements OnInit {

  addemployee: boolean = false;
  listemployee: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  listchange() {
    this.addemployee = false;
    this.listemployee = true
  }
  addchange() {
    this.addemployee = true;
    this.listemployee = false
  }
  reset() {
    this.reset();
  }
}
