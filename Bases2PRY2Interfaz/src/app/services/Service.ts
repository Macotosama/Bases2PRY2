import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOption = {
    headers: new HttpHeaders({
      'Contend-Type': 'aplication/json'
    })
  };

  @Injectable({
    providedIn: 'root'
  })

  export class Service {
      private port = 'http://localhost:8000';
      private urlLoginEmpleado = '/getpValidacionDeVendedor/';
      private urlRegisterEmpleado = '/getpCrearPersonaVendedor/';
      private urlAddCategory = '/getpCrearNevaCategoria/';

    constructor(
        private _http: HttpClient
      ){}

    loginTrabajador(correoElectronico: string, contrasena: string, sede: string): Observable<any> {
        return this._http.get(`${this.port}${this.urlLoginEmpleado}${correoElectronico}/${contrasena}`)
    }

    registrarTrabajador(name: string, apellido1: string, apellido2: string, cedula: number, cel: number, correo: string, pass: string): Observable<any> {
      return this._http.get(`${this.port}${this.urlRegisterEmpleado}${cedula}/${name}/${apellido1}/${apellido2}/${cel}/${correo}/${pass}`)
    }

    addingNewCategory(nameCategory: string, descriptionCategory: string): Observable<any> {
      return this._http.get(`${this.port}${this.urlAddCategory}${nameCategory}/${descriptionCategory}`)
    }
  }