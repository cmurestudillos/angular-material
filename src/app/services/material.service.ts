import { Injectable } from '@angular/core';
// Modelo de datos
import { Lenguaje } from '../models/lenguaje';
// Importar el archivo JSON
import * as data from '../data/data.json';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  lenguajes:Lenguaje[] = (data as any).default;
  public lenguajesFront:any[] = [];
  public lenguajesBack:any[] = [];

  constructor() {}

    // Obtenemos Lenguajes FrontEnd
    getLenguajesFront(){
      for (var i=0; i < this.lenguajes.length; i++){
        const lenguaje: Lenguaje = this.lenguajes[i];
        if(lenguaje.entorno == 'FrontEnd'){
          // console.log(JSON.stringify(this.lenguajes[i]));
          this.lenguajesFront.push(lenguaje);
        }
      }
      return this.lenguajesFront;
    }

    // Obtenemos Lenguajes BackEnd
    getLenguajesBack(){
      for (var i=0; i < this.lenguajes.length; i++){
        const lenguaje: Lenguaje = this.lenguajes[i];
        if(lenguaje.entorno == 'BackEnd'){
          // console.log(JSON.stringify(this.lenguajes[i]));
          this.lenguajesBack.push(lenguaje);
        }
      }
      return this.lenguajesBack;
    }
}
