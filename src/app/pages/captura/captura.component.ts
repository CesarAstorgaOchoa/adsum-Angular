import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-captura',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './captura.component.html',
  styleUrl: './captura.component.css'
})
export class CapturaComponent {

  constructor(private fb: FormBuilder){

  }

  get NombreCompleto(){
    return this.formCaptura.get('NombreCompleto') as FormControl
  }

  get NombreEmpresa(){
    return this.formCaptura.get('NombreEmpresa') as FormControl
  }

  get Correo(){
    return this.formCaptura.get('Correo') as FormControl
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
    'Correo' : ['', [Validators.required, Validators.email]],
    'Telefono' : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]],
    'Categoria' : ['', Validators.required],
    'Mensaje' : ['', Validators.required]
  })

 /* formCaptura = new FormGroup({
    'NombreCompleto' : new FormControl('', Validators.required),
  })*/

  procesar(){
    console.log(this.formCaptura.value)
  }

  //NombreCompleto = new FormControl('', Validators.required)
}
