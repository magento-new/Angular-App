import { Component, Input, OnInit } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { EmployeeService } from 'src/app/service/emp.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

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
