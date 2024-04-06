import { Component} from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatosService } from '../../shared/datos.service';
import { datosCapturaModel } from '../../shared/datosCaptura.model';
import { HttpClientModule} from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-captura',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './captura.component.html',
  styleUrl: './captura.component.css'
})
export class CapturaComponent{

  constructor(private fb: FormBuilder, private datosService: DatosService,
              private route: ActivatedRoute, private router: Router
  ){

  }

  get NombreCompleto(){
    return this.formCaptura.get('NombreCompleto') as FormControl
  }

  get NombreEmpresa(){
    return this.formCaptura.get('NombreEmpresa') as FormControl
  }

  get CorreoElectronico(){
    return this.formCaptura.get('CorreoElectronico') as FormControl
  }

  get Telefono(){
    return this.formCaptura.get('Telefono') as FormControl
  }

  get Categoria(){
    return this.formCaptura.get('Categoria') as FormControl
  }

  get Mensaje(){
    return this.formCaptura.get('Mensaje') as FormControl
  }

  formCaptura = this.fb.group({
    'NombreCompleto': ['', Validators.required],
    'NombreEmpresa' : ['', Validators.required],
    'CorreoElectronico' : ['', [Validators.required, Validators.email]],
    'Telefono' : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]],
    'Categoria' : ['', Validators.required],
    'Mensaje' : ['', Validators.required]
  })

  procesar(){

      let datosCaptura = new datosCapturaModel(
      '',
      this.formCaptura.value.NombreCompleto,
      this.formCaptura.value.NombreEmpresa,
      this.formCaptura.value.CorreoElectronico,
      this.formCaptura.value.Telefono,
      this.formCaptura.value.Categoria,
      this.formCaptura.value.Mensaje)    

    this.datosService.agregaCaptura(datosCaptura).subscribe(() => {
    this.formCaptura.reset()

    },(error) => {
      alert("Error al enviar el formulario")
    })
    
  }

}
