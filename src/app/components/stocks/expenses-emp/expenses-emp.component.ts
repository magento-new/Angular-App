import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-expenses-emp',
  templateUrl: './expenses-emp.component.html',
  styleUrls: ['./expenses-emp.component.scss']
})
export class ExpensesEmpComponent implements OnInit {
  id: number;
  item: string;
  amount: number;
  category: string;
  location: string;
  spendOn: Date;

  formData: FormGroup;
  selectedId: number;
  expenseEntry: any;
  constructor(private router: Router,
    private api: ApiService, private formBuilder: FormBuilder, ) { }

  ngOnInit(): void {
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
  get itemValue() {
    return this.formData.get('item');
  }

  get amountValue() {
    return this.formData.get('amount');
  }
  onClickSubmit(data: any) {
    if (this.formData.valid) {
      this.api.postExpenses(this.formData.value)
        .subscribe({
          next: (res) => {
            alert("Expenses Data Saved Successfully");
            this.formData.reset();
            this.router.navigate(['/expensesDetails']);
          },
          error: () => {
            alert("Please fill all the required Details")
          }
        })
      // this.router.navigate(['/guestuser']);
    }

    else
      alert("Please fill all the required Details")
  }

}
