import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponentComponent } from './buscar-component/buscar-component.component';



@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
