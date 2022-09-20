import { Component, Input, OnInit } from '@angular/core';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-radarchart',
  templateUrl: './radarchart.component.html',
  styleUrls: ['./radarchart.component.scss']
})
export class RadarchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  labelSeries: string = 'My First Dataset'
  @Input()
  // dataSeries: number[] = [30, 20, 80, 21, 16, 95, 40];
  @Input()
  chartLabels: string[] = ['IT','Network','Storage','Antivirus','testing','Deployment']
  @Input()
  chartData: ChartDataset[] = [
    { data: [70, 20, 50, 21, 45, 95], label: 'Department' }
  ]
}
