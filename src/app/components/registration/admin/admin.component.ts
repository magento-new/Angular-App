import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
import { RegistrationService } from 'src/app/service/registration.service';
import { RegistrationModel } from '../../../model/registration.model';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    passwordMatchError=false;
    userForm: FormGroup;
    userModal: RegistrationModel = new RegistrationModel();
    constructor(private formBuilder: FormBuilder, 
        private api : ApiService,private registrationService: RegistrationService, private routes: Router) { }

    ngOnInit(): void {
        this.userForm = this.formBuilder.group({
            firstName: [this.userModal.firstname, [Validators.required]],
            lastName: [this.userModal.lastname, [Validators.required]],
            email: [this.userModal.email, [Validators.required, Validators.email]],
            password: [this.userModal.password, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
            confirmPassword: [this.userModal.confirmPassword, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
            username: [this.userModal.username],
            userType: ['admin']
        });
    }
    onSubmit() {
        const formdata: Array<RegistrationModel> = [{
            firstname: this.userForm.value.firstName,
            lastname: this.userForm.value.lastName,
            email: this.userForm.value.email,
            password: this.userForm.value.password,
            confirmPassword: this.userForm.value.confirmPassword,
            username: this.userForm.value.username,
            userType: 'admin'
            
        }]
        
        console.log("Admin formData", formdata[0]);
        debugger;
        if (this.userForm.valid && this.userForm.value.password==this.userForm.value.confirmPassword) {
            // alert('successfully registered')
            // this.registrationService.registerUser(formdata);
            // formdata[0] = {...formdata[0], ...{admin : true}}
            this.passwordMatchError=false;
            console.log('added admin', formdata[0]);
            this.registrationService.addToLoginList(formdata[0]);
            this.routes.navigate(['/login']);
            this.api.postEmp(this.userForm.value)
        .subscribe({
          next:(res)=>{
            alert('successfully registered')
            this.registrationService.registerUser(formdata[0]);
            this.routes.navigate(['/login']);
          },
          error:()=>{
           // alert('User form is not valid!!');
            
          }
        })
        } else {
            this.passwordMatchError=true;
            alert('User form is not valid!!')
        }
        
    }
}
