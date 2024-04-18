import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: "app-graphic",
  templateUrl: "./graphic.component.html",
  styleUrls: ["./graphic.component.scss"]
})

export class GraphicComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: any = {
    series: [], // Initialiser series avec une valeur vide
    chart: {
      // Ajoutez vos options de chart ici
    },
    xaxis: {
      // Ajoutez vos options de l'axe X ici
    }
  };

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "temps de réponse (s)",
          data: [20, 17, 18, 15, 11, 12, 11, 8, 6]
        }
      ],
      chart: {
        height: 400,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Evolution du temps de réponse",
        align: "center"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]
      }
    };
  }
}
