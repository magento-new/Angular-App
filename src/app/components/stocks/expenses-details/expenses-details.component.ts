import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses-details',
  templateUrl: './expenses-details.component.html',
  styleUrls: ['./expenses-details.component.scss']
})
export class ExpensesDetailsComponent implements OnInit {
  expenseEntries: any;
  edit!: Boolean;
  formData: FormGroup;
  updateId:any;
  constructor(private api: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.getExpenseEntries();
    this.formData = new FormGroup({
      id: new FormControl(),
      empid: new FormControl('1'),
      item: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      category: new FormControl(),
      description: new FormControl(),
      spendOn: new FormControl(),
      status: new FormControl('Pending'),
    });
  }
  getExpenseEntries() {
    this.api.getExpenses()
      .subscribe({
        next: (res: any) => {
          this.expenseEntries = res;
        },
        error: () => {
          alert("Please fill all the required Details")
        }
      })
  }
  editExpenses(i: any) {
    this.edit = true;
    this.updateId=this.expenseEntries[i].id;
    this.formData.controls['id'].setValue(this.expenseEntries[i].id);
    this.formData.controls['item'].setValue(this.expenseEntries[i].item);
    this.formData.controls['amount'].setValue(this.expenseEntries[i].amount);
    this.formData.controls['category'].setValue(this.expenseEntries[i].category);
    this.formData.controls['description'].setValue(this.expenseEntries[i].description);
    this.formData.controls['spendOn'].setValue(this.expenseEntries[i].spendOn);
  }
  deleteExpenses(id: any) {
    if(confirm("Are you sure to delete the entry?")) {
      this.api.deleteExpenseEntry(id)
         .subscribe( data => alert("Deleted Successfully") );

      this.getExpenseEntries();
   }
  }
  editExp() {
    console.log(this.formData.value)
    this.api.updateExpenses(this.updateId,this.formData.value)
    .subscribe({
      next: (res: any) => {
        alert("Data Saved Successfully");
       this.getExpenseEntries();
       this.edit = false;
      },
      error: () => {
        alert("Please fill all the required Details")
      }
    })
  }
  Cancel() {  this.edit = false;}
  add(){
    this.router.navigate(['/expenses']);
  }
}
