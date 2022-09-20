import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/emp.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.scss']
})
export class CreateEmpComponent implements OnInit {

  emp: Employee = new Employee();
  userForm: FormGroup;
  submitted = false;
  userType : any;
  status:string;
  constructor(
    private fb: FormBuilder,
    private router : Router, private route: ActivatedRoute,
    private api : ApiService) { }

  ngOnInit() {
        
      this.userForm = this.fb.group({
        firstName: [this.emp.firstName,Validators.required],
      options: [this.emp.options],
      dept: [this.emp.dept,Validators.required],
      degn: [this.emp.degn,Validators.required],
      email:[this.emp.email,[Validators.required, Validators.email]],
      password:[this.emp.password,Validators.required]
     
    })
  }

  get f() { return this.userForm.controls; }
  onSubmit() {
    this.submitted = true;
    console.log(this.userForm.value);
    if(this.userForm.valid){
     this.api.postEmp(this.userForm.value)
     .subscribe({
       next:(res)=>{
         alert("Employee Added successfully");
         this.userForm.reset();
         this.router.navigate(['employee/list', this.userForm.value]);
       },
       error:()=>{
         alert("Please fill all the required Details")
       }
     })
     }
    }

}
