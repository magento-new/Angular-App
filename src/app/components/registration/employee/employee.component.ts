import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
import { RegistrationService } from 'src/app/service/registration.service';
import { RegistrationModel } from '../../../model/registration.model';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
    userForm: FormGroup;
    userModal: RegistrationModel = new RegistrationModel();
    constructor(private formBuilder: FormBuilder, 
        private registrationService: RegistrationService, 
        private routes: Router,
        private api : ApiService) { }

    ngOnInit(): void {
        this.userForm = this.formBuilder.group({
            firstName: [this.userModal.firstname, [Validators.required]],
            lastName: [this.userModal.lastname, [Validators.required]],
            email: [this.userModal.email, [Validators.required, Validators.email]],
            password: [this.userModal.password, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
            username: [this.userModal.username],
            userType: ['employee']
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
            userType: 'employee'
        }
        ]
        console.log("Employee formData", formdata);
        if (this.userForm.valid) {
            // alert('successfully registered')
            // this.registrationService.registerUser(formdata[0]);
            // this.routes.navigate(['/login']);
        } else {
            alert('User form is not valid!!')
        }

        this.api.postEmp(this.userForm.value)
        .subscribe({
          next:(res)=>{
            alert('successfully registered')
            this.registrationService.registerUser(formdata[0]);
            this.routes.navigate(['/login']);
          },
          error:()=>{
            alert('User form is not valid!!')
          }
        })
    }
    

}
