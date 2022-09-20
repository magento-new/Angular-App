import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/emp.model';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    constructor(private http: HttpClient) { }

    addEmployee(empObj: Employee): Observable < Employee > {
        console.log("service---",empObj);
        
        return this.http.post<Employee>(
            'api/employees',
            {empObj},
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        )
    }

    getData() {
        return this.http.get('/assets/empData.json');
    }
}
