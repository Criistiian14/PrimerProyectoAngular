import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
  imagenLogo: string="../../assets/img/logo.jpg"
  altLogo:string="Logo ISP"

}
