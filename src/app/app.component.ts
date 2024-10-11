import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { PiePaginaComponent } from "./pie-pagina/pie-pagina.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EncabezadoComponent, PiePaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyAngular01';

  nombre:string="Cristian"

  persona={
    nombre: "Cristian",
    apellido: "Perez",
    edad: 30,
    ciudad: "Madrid"
  };
}

/*
PASO 1: INSTALAR BOOSTRAP
PASO 2: CREAR COMPONENTES
PARA CREAR COMPONENTE : ng generate component encabezado (ng g c "nombre de componente")
*/