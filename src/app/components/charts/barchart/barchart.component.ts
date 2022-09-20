import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartDataset } from "chart.js";
import { EmployeeService } from 'src/app/service/emp.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  constructor(private config:EmployeeService) { }

  myresult: any;
  ngOnInit() {
    this.config.getData().subscribe(
      (res:any)=>{
        console.log(res.data);
        this.myresult = res.data
      }
    )
  }

  @Input()
  labelSeries: string = 'My First Dataset'
  @Input()
  dataSeries: number[] = [3,1,7];
  @Input()
  chartLabels: string[] = ["Annual", "Sick", "WFH"]
  @Input()
  chartData: ChartDataset[] = [
    { data: [3,1,7], label: 'Leave' }
  ]
}
