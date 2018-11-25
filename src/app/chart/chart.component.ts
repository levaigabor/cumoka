import { Component, OnInit, Input } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';
import { Meal } from '../models/meal';
//var CanvasJS = require('./canvasjs.min');

@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html'
})

export class ChartComponent implements OnInit {
  @Input() datapoints: Meal[];

  constructor() { }

  ngOnInit() {
    this.createChart();
  }

  public createChart() {
    let points = [];

    this.datapoints.forEach(element => {
        points.push({ y: element.kcal, label: element.name})
      }
    )

    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "A napi kalóriabeviteled"
      },
      data: [{
        type: "column",
        dataPoints: points
      }]
    });

    chart.render();
  }
}