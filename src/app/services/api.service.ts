import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventScheduler } from '../components/scheduler-feature/EventScheduler';

const hostPort = "http://localhost:8081"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public token:any="";
  public headers:any;
  constructor(private http: HttpClient) { 
     
  }

  postJobs(data : any){
    return this.http.post<any>(hostPort+"/jobs/applyJob", data)
  }
  getJobs(){
    return this.http.get<any>(hostPort+"/jobs");
  }

  postLeaves(data : any){
    return this.http.post<any>(hostPort+"/leaves/adduserleave", data)
  }
  getLeaves(){
    return this.http.get<any>(hostPort+"/leaves");
  }
  updateLeaves(data : any){
    return this.http.put<any>(hostPort+"/leaves/updateleave", data);
  }

  postEmp(data : any){
    return this.http.post<any>(hostPort+"/employeedetail/addemployee", data);
  }
 

  setToken(token:any){
    this.token=token;
     this.headers =new HttpHeaders();
    this.headers = this.headers.set('Authorization', `Bearer ${this.token}`);
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }
getauth(data:any){
  return this.http.post<any>(`${hostPort}/authenticate`,data.value);
}

  getEmp(){
    
     return this.http.get<any>(hostPort+"/employeedetail/findalluseremployee",{headers: this.headers});
   }
  // mychange included /employeedetail
  updateEmp(id:any,data : any){
    return this.http.put<any>(`${hostPort}/employeedetail/createEmployee/${id}`, data);
  }
  applyJobs(data : any){
    return this.http.post<any>(hostPort+"/jobs/applyJob", data)
  }
  getUserApplyJobs(){
    return this.http.get<any>(hostPort+"/jobs");
  }
  postEvent(data : any){
    return this.http.post<any>(hostPort+"/event", data)
  }
  updateEvent(id:any,data : any){
    return this.http.put<any>(`${hostPort}/event/${id}`, data);
  }
  getEvent(){
    return this.http.get<any>(hostPort+"/event");
  }
  deleteEvent(id:any){
    return this.http.delete<any>(`${hostPort}/event/${id}`);
  }
  reqEvent(data : any){
    return this.http.post<any>(hostPort+"/reqevent", data)
  }
  getEventReq(){
    return this.http.get<any>(hostPort+"/reqevent");
  }
  updateEventReq(id:any,data : any){
    return this.http.put<any>(`${hostPort}/reqevent/${id}`, data);
  }
  postPaySlip(data : any){
    return this.http.post<any>(hostPort+"/paySlip", data,{headers: this.headers});
  }
  getPaySlip(){
    return this.http.get<any>(hostPort+"/paySlip",{headers: this.headers});
  }
  postExpenses(data : any){
    return this.http.post<any>(hostPort+"/expense", data,{headers: this.headers});
  }
  getExpenses(){
    return this.http.get<any>(hostPort+"/expense",{headers: this.headers});
  }
  updateExpenses(id:any,data : any){
    return this.http.put<any>(`${hostPort}/expense/${id}`, data,{headers: this.headers});
  }
  deleteExpenseEntry(id:any){
    return this.http.delete<any>(`${hostPort}/expense/${id}`,{headers: this.headers});
  }
  saveData(eventScheduler : EventScheduler){
    return this.http.post<any>(hostPort+"/scheduler/save",eventScheduler,{headers: this.headers});
  }
  getData(){
    return this.http.get<any>(hostPort+"/scheduler",{headers: this.headers});
  }
}
