import { Component, OnInit } from '@angular/core';
// Servicio
import { MaterialService } from './services/material.service';
// Modelo de Datos
import { Lenguaje } from './models/lenguaje';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public year = new Date().getFullYear();

  title = 'angularMaterial';
  lenguajesFront:Lenguaje[] = [];
  lenguajesBack:Lenguaje[] = [];

  durationInSeconds = 5;

  constructor(private _service:MaterialService, public snackBar: MatSnackBar ) {}

  ngOnInit(): void {
    this.lenguajesFront = this._service.getLenguajesFront();
    this.lenguajesBack = this._service.getLenguajesBack();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 2000,
    });
 }
}
