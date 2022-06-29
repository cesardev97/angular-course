import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {

  nuevo:Personaje = {
    nombre: 'Gottens',
    poder: 13000
  }


  constructor(){}

}
