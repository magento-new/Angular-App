import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileModel } from 'src/app/model/profile.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-guestuser-profile',
  templateUrl: './guestuser-profile.component.html',
  styleUrls: ['./guestuser-profile.component.scss']
})
export class GuestuserProfileComponent implements OnInit {

  profile : ProfileModel = new ProfileModel();
  profileForm : FormGroup
  constructor(private formBuilder: FormBuilder,
    private api : ApiService,
    private router : Router) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name :[this.profile.name,[Validators.required]],
      gender : [this.profile.gender,[Validators.required]],
      department :[this.profile.department,[Validators.required]],
      designation : [this.profile.designation,[Validators.required]],
      email : ['',[Validators.required]],
      Phone : ['',[Validators.required]],
      address : ['',[Validators.required]],
      currentcompany : ['',[Validators.required]],
      CurrentCTC : ['',[Validators.required]],
      expectedCTC : ['',[Validators.required]],
      totalexperience : ['',[Validators.required]],
      releventexperience : ['',[Validators.required]],
      notice : ['',[Validators.required]],
      resume : [this.profile.file,[Validators.required]]
    })
  }
  onSubmit()
  {
    if(this.profileForm.valid){
     alert("Your profile has been saved. We will reach you soon!");
     this.api.applyJobs(this.profileForm.value)
     .subscribe({
       next:(res)=>{
         alert("job applied successfully");
         this.profileForm.reset();
         this.router.navigate(['/guestuser']);
       },
       error:()=>{
         alert("Please fill all the required Details")
       }
     })
     this.router.navigate(['/guestuser']);
    }

     else
     alert("Please fill all the required Details")

  }
}
