import { Component, OnInit } from '@angular/core';
import { Energia } from '../../clases/energia';
import { EnergiaService } from '../../servicios/energia.service';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';
@Component({
  selector: 'app-energia',
  templateUrl: './energia.component.html',
  styleUrls: ['./energia.component.scss']
})
export class EnergiaComponent implements OnInit {
  energia: Energia[] = [];
  Highcharts: typeof Highcharts = Highcharts; 
  chartOptions: Highcharts.Options = {
     chart: { 
      type: 'bar'
     }, title: {
       text: 'energia por tipo'
    }, xAxis: {
       categories: ['solar', 'eolica', 'electrica']
       }, yAxis: {
         title: {
          text: 'produccion' 
        } }, 
        series: [{
           name: 'Jane',
            data: [1, 0, 4], 
            type: 'bar'
           }, 
           {
             name: 'John', data: [5, 7, 3],
              type: 'bar' 
            }]
   };
  constructor(private energiaServicios: EnergiaService) {}

  ngOnInit(): void {
    this.listaEnergia();
    this.Highcharts.chart('container', this.chartOptions);
  }

  listaEnergia() {
    this.energiaServicios.getEnergias().subscribe(
      data => {
        this.energia = data;
        console.log(this.energiaServicios);
      }
    );
  }
}
