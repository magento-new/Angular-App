import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkspaceModel } from 'src/app/model/workspace.model';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  workspace : WorkspaceModel = new WorkspaceModel();
  jobnotifyForm : FormGroup
 
  constructor(private formBuilder: FormBuilder,private router : Router, private api : ApiService) { }

  ngOnInit(): void {
    this.jobnotifyForm = this.formBuilder.group({
      aboutcompany :[this.workspace.aboutcompany,[Validators.required]],
      description : [this.workspace.description,[Validators.required]],
      skills :[this.workspace.skills,[Validators.required]],
      experience : [this.workspace.experience,[Validators.required]],
      notice : [this.workspace.notice,[Validators.required]],
      serving : [this.workspace.serving,[Validators.required]],
      currentctc : [this.workspace.currentctc,[Validators.required]],
      expectedctc: [this.workspace.expectedctc,[Validators.required]]
    })
  }
  onFormSubmit()
  {
   console.log(this.jobnotifyForm.value);
   if(this){
    this.api.postJobs(this.jobnotifyForm.value)
    .subscribe({
      next:(res)=>{
        alert("job applied successfully");
        this.jobnotifyForm.reset();
        this.router.navigate(['/guestuser']);
      },
      error:()=>{
        alert("Please fill all the required Details")
      }
    })
     //this.router.navigate(['/guestuser', this.jobnotifyForm.value]);
    }

  }

}

