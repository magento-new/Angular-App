import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-guestuser',
  templateUrl: './guestuser.component.html',
  styleUrls: ['./guestuser.component.scss']
})
export class GuestuserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['aboutcompany', 'description', 'experience', 'notice','skills','serving','currentctc','expectedctc'];
  dataSource: MatTableDataSource<any>;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getAllJobs();
  }
  
getAllJobs(){
  this.api.getJobs()
  .subscribe({
    next:(res)=>{
     console.log(res);
     this.dataSource = new MatTableDataSource(res);
    },
    error:()=>{
      alert("Error while fetching the records!!")
    }
  })
}
}
