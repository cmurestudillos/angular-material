import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Componentes Material
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatInputModule,
    MatTabsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatInputModule,
    MatTabsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
