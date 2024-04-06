import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datosCapturaModel } from './datosCaptura.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  Url = 'http://localhost:3000'
  
  constructor(private http: HttpClient) { }

  agregaCaptura(captura: datosCapturaModel){
    return this.http.post<string>(`${this.Url}/api/contacto`, captura)
  }
}
