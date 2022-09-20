import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { LoginModel } from 'src/app/model/login.model';
import { RegistrationModel } from 'src/app/model/registration.model';
import { LoginService } from 'src/app/service/login.service';
import { NotificationService } from 'src/app/service/notification.service';
import { RegistrationService } from 'src/app/service/registration.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    userForm: FormGroup;
    loginModel = new LoginModel;


    constructor(private router: Router, 
        private api : ApiService,private formBuilder: FormBuilder, 
        private loginService: LoginService, private registeredUser: RegistrationService, private notifyService: NotificationService) { }

    ngOnInit(): void {
        this.userForm = this.formBuilder.group({
            username: [this.loginModel.userName, [Validators.required]],
            password: [this.loginModel.passWord, [Validators.required]],
            userType: [this.loginModel.userType, [Validators.required]]
        })
    }
    guestUser() {
        this.loginService.getUserType('guest');
        this.router.navigate(['/guestuser']);
    }
    login() {
        // this.registeredUser.resgisterSubject.pipe(
        //     take(1),
        //     map( (userDetails): void => {
        //         console.log('userDetails', userDetails);
        //         console.log('this.userForm.value', this.userForm.value);
        //         if (userDetails && userDetails.length) {
        //             const validUser:any = [];
        //             userDetails.map(user => {
        //                 if (user && this.userForm.valid && this.userForm.value.username === user.username && 
        //                     this.userForm.value.password === user.password && this.userForm.value.userType === user.userType) {
        //                         validUser.push(user);
        //                 }
        //             });
        //             if (validUser && validUser.length) {
        //                 this.loginService.getUserType(this.userForm.value.userType);
        //                 this.loginService.getEmployeeName(this.userForm.value.username);
        //                 // this.notifyService.incrementBadgeValue(1);
        //                // this.router.navigate(['/dashboard']);
        //             } else {
        //                 alert("Please enter valid credentials (or) Sign up");
        //             }
        //         }
        //     })
        // ).subscribe();

       
        this.api.getauth(this.userForm).subscribe({
          
            next:(res:any)=>{
                
                this.api.setToken(res.token);
                this.getAllemp();
            }
        })
       
      
    }

    getAllemp(){
        let userDetails:any;
        let status:boolean=false;
        this.api.getEmp().subscribe({
            next:(res:any)=>{
            userDetails=res;
        
            res.forEach((e: any) => {
                if(e.username==this.userForm.value.username 
                    //&&
                   // e.password==this.userForm.value.password &&
                  //  e.userType==this.userForm.value.userType
                ){
                    console.log(e);
                    status=true;
                    this.loginService.getUserType(this.userForm.value.userType);
                    this.loginService.getEmployeeName(this.userForm.value.username);
                    this.loginService.setUserDetails(e);
                    this.router.navigate(['/dashboard']);
                }
            });
            if(status==false){
                alert("Please enter valid credentials (or) Sign up");
            }
          },
          error:()=>{
          
          }
          
        })
    }
}
