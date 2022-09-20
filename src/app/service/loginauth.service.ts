import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { LoginModel } from "../model/login.model";
import { LoginService } from "./login.service";

@Injectable({
providedIn : 'root'
})

export class LoginauthService {
    
    constructor(private loginservice: LoginService){

    }
    getuserType(){
        this.loginservice.userTypeSubject.subscribe(usertype =>{
            console.log("userType",usertype);
            if(usertype == 'admin')
            return true;
            else 
            return false;
          })
    }
}