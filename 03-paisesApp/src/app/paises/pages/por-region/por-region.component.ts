import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 10px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paisesR: Country[] = [];

  constructor(private paisService:PaisService) { }

  activarRegion(region: string){
    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paisesR = [];
    this.paisService.buscarRegion(region)
      .subscribe(resp=> this.paisesR = resp);
  }

}
