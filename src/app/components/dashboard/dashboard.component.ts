import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/emp.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  AttendanceTypeLabels: string[] = ['WFH', 'ANNUAL', 'SICK'];
  empAttendanceData: any[] = [
    {totalEmp:30, present:27, absent:3}
  ];
  constructor(
    private service: EmployeeService, private loginservice : LoginService
  ) { }

  ngOnInit(): void {
    // this.service.getEmpList().subscribe(

    // )

    this.loginservice.userTypeSubject.subscribe(usertype =>{
      console.log("userType",usertype);
    })
  }

}
