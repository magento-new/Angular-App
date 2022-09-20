import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditleaveModel } from 'src/app/model/emp.model';
import { EmployeeService } from 'src/app/service/emp.service';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent implements OnInit {

  constructor(private api : ApiService,private config:EmployeeService, private formBuilder : FormBuilder ) { }
  myresult: any;
  edit!: Boolean;
  leaveForm!: FormGroup;
  clicked =false;
  editIndex!: number;
  editArr: Array<any> = [];
  leaveArr: Array<any> = [];
  
  leaveArr1 : Array<any> =[
    {
      "EmpId" : '1',
"EmpName" :'Sameer',
"EmpCode" : '123',
"EmpCardNo" : '1068213',
"Department" : 'IT',
"FromDate" : '2022/26/6',
"ToDate" : '2022/27/6',
"type" : 'Annual',
"Status" : 'Approved'
    },
    {
      "EmpId" : '2',
"EmpName" :'Kavya',
"EmpCode" : '456',
"EmpCardNo" : '1068214',
"Department" : 'IT',
"FromDate" : '2022/28/6',
"ToDate" : '2022/29/6',
"type" : 'Annual',
"Status" : 'Pending'

    }
  ]
  editModal : EditleaveModel = new EditleaveModel();
  statusArr :Array<string> = ["Approved","Pending","Rejected"];
  selectedStatus!: string;

  ngOnInit(): void {
    this.getAllLeaves();
  
    this.config.getData().subscribe(
      (res:any)=>{
        console.log(res.data);
        this.myresult = res.data
      }
    )
  }

  getAllLeaves(){
    this.api.getLeaves()
    .subscribe({
      next:(res)=>{
       console.log(res);
       this.leaveArr = res;
      },
      error:()=>{
        alert("Error while fetching the Leave records!!")
      }
    })
  }
  
  editLeave(i : number){
    this.clicked =!this.clicked;
    this.editIndex = i;
    if(this.editArr?.length==0){
    this.editArr.push(this.leaveArr[i])
    console.log('edited array-->',this.editArr);}
    this.edit = true;
    this.selectedStatus = this.editArr[0].status;
    this.leaveForm = this.formBuilder.group({
     id : [this.editArr[0].id,[Validators.required]],
      employeeName : [this.editArr[0].empname,[Validators.required]],
      employeeId : [this.editArr[0].employeeId,[Validators.required]],
      deptId : [this.editArr[0].deptId,[Validators.required]],
      fromdate : [this.editArr[0].fromdate,[Validators.required]],
      todate : [this.editArr[0].todate,[Validators.required]],
      leavetype : [this.editArr[0].leavetype,[Validators.required]],
      leavereason : [this.editArr[0].leavereason,[Validators.required]],
      status : [this.editArr[0].status,[Validators.required]],


    })
  }
  changeStatus(e: any){
    this.selectedStatus = e.target.value;
  }
  deleteLeave(i : number){
    this.edit = false;
    this.editArr =[];
    this.leaveArr=this.leaveArr.splice(i,1);
    console.log("delearr-->",this.leaveArr)
  }

  Done(){
    this.edit = false;
    this.editArr =[];

    console.log(this.leaveForm.value);
    if(this.leaveForm.valid){
     this.api.updateLeaves(this.leaveForm.value)
     .subscribe({
       next:(res)=>{
         alert("Leave Updated successfully");
         this.leaveForm.reset();
         
       },
       error:()=>{
         alert("Please fill all the required Details")
       }
     })
     }
    }
  Cancel(){
    this.edit = false;
    this.editArr =[];

  }
}
