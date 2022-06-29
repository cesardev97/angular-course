import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  autor:string = 'Cesar';
  enMayusculas: boolean = false

  constructor() { }

  cambiar(){
    this.enMayusculas = !this.enMayusculas
  }

}
