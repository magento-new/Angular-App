import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginservice: LoginService,private router: Router){}
  userType: string;
  canActivate()
    {
      this.loginservice.userTypeSubject.subscribe(usertype =>{
        console.log("userType",usertype);
        this.userType = usertype;
      })
      console.log("userType",this.userType);

      if(this.userType == 'admin')
        return true;
        else {
        window.alert("You are not authenticated..!");
        this.router.navigate(['/login']);
        return false;
        }
    }
  
}
