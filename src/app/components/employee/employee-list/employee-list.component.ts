import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

    displayedColumns: string[] = ['name', 'options', 'dept', 'email', 'degn'];
    dataSource: MatTableDataSource<any>;

    constructor(private api: ApiService) { }
    myresult: any;
    ngOnInit(): void {
        this.getemployeelist();
    }
    getemployeelist() {
        this.api.getEmp()
            .subscribe({
                next: (result) => {
                    console.log(result);
                    this.dataSource = new MatTableDataSource(result);
                },
                error: () => {
                    alert("Error while fetching the records!!")
                }
            })
    }
}
