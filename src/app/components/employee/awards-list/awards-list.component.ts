import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/emp.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-awards-list',
  templateUrl: './awards-list.component.html',
  styleUrls: ['./awards-list.component.scss']
})
export class AwardsListComponent implements OnInit {
 

  constructor(private config: EmployeeService,
    private formBuilder: FormBuilder,) { }
  // awardEmpList = [];
  awardEmpList: any;
  edit!: Boolean;
  awardForm: FormGroup;
  editEmp: Array<any> = [];
  selectedStatus:Boolean=false;
selIndex:any;
  ngOnInit(): void {
    this.config.getData().subscribe(
      (res: any) => {
        console.log('awards', res.data);
        this.awardEmpList = res.data
      }
    )
    this.awardForm = this.formBuilder.group({
      name : ['',[Validators.required]],
      award : ['',[Validators.required]],
      gift :['',[Validators.required]],     
      joinDate : ['',[Validators.required]]
    
         })
  }

  deleteEmp(empDetails: any, index: number) {
    if (confirm("Are you sure to delete " + empDetails.name)) {
      this.awardEmpList.splice(index, 1);
      alert(empDetails.name + " details deleted successfully")
      console.log("Implement delete functionality here");
    }
  }
  editAward(empDetails: any,i : number){
          if(this.editEmp?.length==0){
    this.editEmp.push(this.awardEmpList[i])
    this.selIndex=i;
    this.awardForm.setValue({
      name: this.awardEmpList[i].name,
      award: this.awardEmpList[i].award,
      gift:this.awardEmpList[i].gift,
      joinDate:this.awardEmpList[i].joinDate,
   });
    console.log('edited array-->',this.editEmp);}
    this.edit = true;
    this.selectedStatus = true;
  }
  update(){
    this.edit = false;
    console.log(this.awardForm.value)
    this.awardEmpList[this.selIndex]=this.awardForm.value;
  alert(" details Update successfully")
  this.awardForm.reset();
  }

  Cancel(){
    this.edit = false;
    this.selIndex=null;
  }
}
