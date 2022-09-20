import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-jobuserpost',
  templateUrl: './jobuserpost.component.html',
  styleUrls: ['./jobuserpost.component.scss']
})
export class JobuserpostComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Gender','Phone', 'email','Department', 'experience','notice','currentctc','expectedctc'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getAllJobs();
  }
  
getAllJobs(){
  this.api.getUserApplyJobs()
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
