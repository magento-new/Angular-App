import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee, EmployeeDetails } from 'src/app/model/emp.model';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {

  emp: EmployeeDetails = new EmployeeDetails();
  userForm: FormGroup;
  submitted = false;
  userType : any;
  status:string;
  id:any;
  constructor(
    private fb: FormBuilder,
    private router : Router, private route: ActivatedRoute,
    private loginService: LoginService,
    private api : ApiService) { }

  ngOnInit() {
    this.emp=this.loginService.getUserDetails();
    //my change
    this.id=this.loginService.getUserDetails();
    this.id=this.id.employeeId;
    console.log(this.emp)
    this.userForm = this.fb.group({
      firstName: [this.emp.firstName,Validators.required],      
      lastName: [this.emp.lastName,Validators.required],
      mobile: [this.emp.mobile,Validators.required],
      email:[this.emp.email,[Validators.required, Validators.email]],
      address:[this.emp.address,Validators.required]  ,
      username:[this.emp.username]   ,
      password:[this.emp.password] ,
      userType:[this.emp.userType]   


    })
  }

  get f() { return this.userForm.controls; }
  onSubmit() {
    this.submitted = true;
    console.log(this.userForm.value);
    if(this.userForm.valid){
     this.api.updateEmp(this.id,this.userForm.value)
     .subscribe({
       next:(res)=>{
         alert("Employee Updated successfully");
         this.userForm.reset();
         //this.router.navigate(['employee/list', this.userForm.value]);
       },
       error:()=>{
         alert("Please fill all the required Details")
       }
     })
     }
    }

}
