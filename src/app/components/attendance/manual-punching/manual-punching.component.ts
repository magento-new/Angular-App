import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { EmployeeService } from 'src/app/service/emp.service';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-manual-punching',
  templateUrl: './manual-punching.component.html',
  styleUrls: ['./manual-punching.component.scss']
})
export class ManualPunchingComponent implements OnInit, OnChanges {
  constructor(private config:EmployeeService,private fb: FormBuilder,
    private loginService: LoginService ) { }
  empArray: any;
  empType:any
  checkBoxselected:any;
  daysArray:Array<string> = ['Monday','Tuesday','wednesday', 'Thursday','Friday'];
  daysSelected : boolean = false;
  missedDays : number =0;
  myForm!: FormGroup;
empName:any;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      presentDays: this.fb.array([])
    });

    this.config.getData().subscribe(
      (res:any)=>{
        console.log(res.data);
        this.empArray = res.data
        console.log("Emp array-->",res.data);
      }
    )
    let empdetails=this.loginService.getUserDetails();
    this.empName=empdetails.firstName;
    this.empType=empdetails.userType;
    console.log(this.empArray);
   this.daysSelected = false;

  }
  ngOnChanges(): void {
   // this.onChange();


  }
Submit(){
 
 if(this.missedDays==0){
  alert('Plase fill the entries');
  return;
 }
 else
 alert('Your Attendance details has been submitted');
 this.missedDays =  0;
 this.daysSelected = false;

    this.myForm.reset();
  }
  
onChange(days: string, isChecked: boolean) {
  const attendanceArray = <FormArray>this.myForm.controls['presentDays'];
  
  if (isChecked) {
    attendanceArray.push(new FormControl(days));
    
    this.missedDays = attendanceArray.length;
    
  } else {
    let index = attendanceArray.controls.findIndex(x => x.value == days)
    attendanceArray.removeAt(index);
    this.missedDays = attendanceArray.length;
  }
}

 
}
