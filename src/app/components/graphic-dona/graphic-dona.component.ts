import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphic-dona',
  templateUrl: './graphic-dona.component.html',
  styles: []
})
export class GraphicDonaComponent implements OnInit {

  // Doughnut
  @Input() doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() doughnutChartData:number[] = [350, 450, 100];
  @Input() doughnutChartType:string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
