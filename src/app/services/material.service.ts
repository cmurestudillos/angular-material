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

    getLenguajesFront(){
      for (const lenguaje of this.lenguajes){
        if(lenguaje.entorno == 'FrontEnd'){
          this.lenguajesFront.push(lenguaje);
        }
      }
      return this.lenguajesFront;
    }
    // Obtenemos Lenguajes BackEnd
    getLenguajesBack(){
      for (const lenguaje of this.lenguajes){
        if(lenguaje.entorno == 'BackEnd'){
          this.lenguajesBack.push(lenguaje);
        }
      }
      return this.lenguajesBack;
    }
}
