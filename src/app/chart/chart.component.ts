import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';
import { ChartService } from '../services/chart.service';
//var CanvasJS = require('./canvasjs.min');

@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html'
})

export class ChartComponent implements OnInit {
  constructor(private _chartService: ChartService) { }

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });

    chart.render();
  }

  private getData() {
    let requestPayload = {
      "id": 2,
      "date": "2018-11-11"
    };

    this._chartService.getDiagramData(requestPayload);
  }
}