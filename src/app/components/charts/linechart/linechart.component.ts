import { Component, Input, OnInit } from '@angular/core';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

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
    { data: [30, 20, 80, 21, 45, 95], label: 'Department' }
  ]
}
