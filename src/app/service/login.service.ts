import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { LoginModel } from "../model/login.model";

@Injectable({
providedIn : 'root'
})

export class LoginService {
    userDetails:any;
    mockUserList : Array<LoginModel> = [
        {
            userName : 'Abinaya S',
            passWord : '12345',
            userType : 'Admin'
        },
        {
            userName : 'Aravind Kumar',
            passWord : '45678',
            userType : 'Employee'
        }
    ];  
    userTypeSubject = new BehaviorSubject('');
     empName = new BehaviorSubject('');
    loginUser(){
      return of(this.mockUserList);
    }
    getUserType(type:string){
        this.userTypeSubject.next(type);
   }
    getEmployeeName(type:string){
        this.empName.next(type);
   }
   getUserDetails(){
       return this.userDetails
   }
   setUserDetails(user:any){
       this.userDetails=user;
   }

}