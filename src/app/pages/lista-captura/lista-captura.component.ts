import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { datosCapturaModel } from '../../shared/datosCaptura.model';
import { DatosService } from '../../shared/datos.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-captura',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './lista-captura.component.html',
  styleUrl: './lista-captura.component.css'
})
export class ListaCapturaComponent implements OnInit{

  Info: Observable<datosCapturaModel[]> | undefined

  constructor(private datosService: DatosService){

  }

  ngOnInit(){
    this.Info = this.datosService.obtenerInfo()
  }

  eliminarDatos(id: String){
    this.datosService.borrarContacto(id).subscribe(data=>{alert("Datos eliminados")})

    location.reload()
  }

}
