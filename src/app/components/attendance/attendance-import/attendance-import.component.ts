import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-attendance-import',
  templateUrl: './attendance-import.component.html',
  styleUrls: ['./attendance-import.component.scss']
})
export class AttendanceImportComponent implements OnInit {
  importForm!: FormGroup;

  constructor(private formBuildr: FormBuilder) { }

  ngOnInit(): void {
    this.importForm= this.formBuildr.group({
      date : ['',[Validators.required]],
      file : ['',[Validators.required]]
    })
  }
import(){
 if(this.importForm.valid)
 {
alert('Attendance file has been submitted');
this.importForm.reset();

 }
 else{
  alert('Please fill the required Details');
 }

}
}
