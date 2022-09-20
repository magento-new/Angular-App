import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  adminLink : boolean = true;
  employeeLink : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  goToadmin() {
    this.adminLink = true;
    this.employeeLink = false;
  }
  goToEmployee()
  {
    this.employeeLink = true;
    this.adminLink = false;
  }
}
