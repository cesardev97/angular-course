import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string  = 'Melissa';
  genero: string  = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  nombres:string[] = ['Juan', 'Pedro', 'Luis', 'Teresa', 'Miguel', 'Fernando'];

  nombresMapa = {
    '=0': 'No tenemos ningun cliete esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarNombre(){
    this.nombre = 'Cesar'
    this.genero = 'masculino'
  }

  eliminarCliente(){
    this.nombres.shift();
    // this.nombres.pop();
  }

  // Keyvalue Pipe
  persona = {
    nombre: 'Cesar',
    edad: 24,
    direcion: 'Lima Peru'
  }

  //Asyc Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 2000);
  })

}
