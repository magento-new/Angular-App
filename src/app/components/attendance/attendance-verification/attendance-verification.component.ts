import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {EmployeeService} from '../../../service/emp.service'
import { FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import {AttendanceModel} from '../../../model/emp.model'

@Component({
  selector: 'app-attendance-verification',
  templateUrl: './attendance-verification.component.html',
  styleUrls: ['./attendance-verification.component.scss']
})
export class AttendanceVerificationComponent implements OnInit {
  userForm!: FormGroup;
  empArray: any;
  filterEmp : Array<AttendanceModel> = [];
  isOpenDialogue : Boolean=false;

  constructor(private dialog: MatDialog,private empService:EmployeeService, private formBuildr: FormBuilder) {

  }

  ngOnInit(): void {

    this.userForm= this.formBuildr.group({
      name : ['',[Validators.required]],
      date : ['',[Validators.required]]
    })
    this.empService.getData().subscribe(
      (res:any)=>{
        console.log(res.data);
        this.empArray = res.data
        console.log("Emp array-->",res.data);
      });


  }
  OpenEmployeeData(){
if(this.userForm.valid){

    for(var i=0;i<this.empArray.length;i++){

        if(this.userForm.value.name.toLowerCase() == this.empArray[i].name.toLowerCase()){
          this.filterEmp.push(this.empArray[i]);
          console.log("filtered array",this.filterEmp);
        }

        
      }

  if(this.filterEmp?.length !==0 ){
    this.isOpenDialogue = true;
    console.log("filtered array",this.filterEmp);
    console.log( "filtr length",this.filterEmp.length);
    
  }
  else{
  alert("No Records match with our Employee list")
  }
}
else{

}
}

}
