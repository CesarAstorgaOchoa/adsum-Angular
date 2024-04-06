import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datosCapturaModel } from './datosCaptura.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  Url = 'http://localhost:3000/api'
  
  constructor(private http: HttpClient) { }

  agregaCaptura(captura: datosCapturaModel){
    return this.http.post<string>(`${this.Url}/contacto`, captura)
  }

  obtenerCaptura(id: String){
    return this.http.get<datosCapturaModel[]>(`${this.Url}/info/${id}`)
  }

  obtenerInfo(){
    return this.http.get<datosCapturaModel[]>(this.Url+'/info')
  }

  actualizarCaptura(captura: datosCapturaModel){
    return this.http.put<String>(`${this.Url}/contacto/${captura.idContacto}`, captura)
  }

  borrarContacto(id: String){
    return this.http.delete<String>(`${this.Url}/contacto/${id}`)
  }
  
}
