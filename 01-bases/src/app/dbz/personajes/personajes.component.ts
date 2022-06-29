import { Component } from '@angular/core';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

  // @Input('datapersonajes') personajes:Personaje[] = [];

  constructor(private dbzService: DBZService){}
  
  get personajes(){
    return this.dbzService.personajes;
  }
}
 