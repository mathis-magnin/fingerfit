import { Component, Input, ViewChild } from "@angular/core";
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
import { max } from "rxjs";
import { Statistic } from "src/models/statistic.model";

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
  @Input() public items: Statistic[] = [];

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
      series: [],
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
        categories: []
      }
    };
  }

  ngOnChanges() {
    console.log("items changed");
    this.chartOptions.series = this.processSeries();
    this.chartOptions.xaxis.categories = this.processCategories();
  }

  public processSeries(): {name:string, data:number[]}[]{
    let series: {name:string, data:number[]}[] = [];
    for (let item of this.items) {
      series.push({
        name: "temps de réponse (s) pour la position " + item.positionId,
        data: item.times
      });
    }
    console.log("series processed : " + series.length);
    return series;
  }

  public processCategories(): number[] {
    let categories: number[] = [];
    let lengths: number[] = this.items.map(item => item.times.length);
    let maxLen: number = Math.max(...lengths);
    for (let i = 0; i < maxLen; i++) {
      categories.push(i + 1);
    }
    return categories;
  }
}
