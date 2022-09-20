import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-daily-expenses',
  templateUrl: './daily-expenses.component.html',
  styleUrls: ['./daily-expenses.component.scss']
})
export class DailyExpensesComponent implements OnInit {
  expenseEntries: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getExpenseEntries();
  }
  getExpenseEntries() {
    this.expenseEntries=[];
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
  approveExpenses(i:any){
    this.expenseEntries[i].status="Approve"
    this.api.updateExpenses(this.expenseEntries[i].id,this.expenseEntries[i])
    .subscribe({
      next: (res: any) => {
        alert("Data Saved Successfully");
       this.getExpenseEntries();
      
      },
      error: () => {
        alert("Please fill all the required Details")
      }
    })
  }
  deleteExpenses(id: any) {
    if(confirm("Are you sure to delete the entry?")) {
      this.api.deleteExpenseEntry(id)
         .subscribe( data => {
           alert("Deleted Successfully");
         this.getExpenseEntries(); 
         });
 
   }
  }
}
