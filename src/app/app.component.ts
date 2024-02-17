import { Component } from '@angular/core';
import { MaterialService } from './services/material.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Lenguaje } from './models/lenguaje';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-material';
  public year = new Date().getFullYear();
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
