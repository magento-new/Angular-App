import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcompany',
  templateUrl: './listcompany.component.html',
  styleUrls: ['./listcompany.component.scss']
})
export class ListcompanyComponent implements OnInit {
  company = [
    { companyName: 'HCL' },
    { companyName: 'TCS'},
    { companyName: 'wipro'},
    { companyName: 'acenture'},
    { companyName: 'Atos'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
