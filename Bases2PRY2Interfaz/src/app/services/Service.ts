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
      private urlGetCategory = '/getpRetornaCategorias';
      private urlGetNameCategory = '/getpEnviarCategorias';
      private urlAddProduct = '/getpCrearNevoProducto/';
      private urlGetProduct = '/getpRetornaProductos';
      private urlGetInventary = '/getpRetornoInventario';
      private urlGetOnlyNameProduct = '/getpRetornaProductoNombreIdentificador';
      private urlAddinInventary = '/getpAgragarAlInventario/';
      private urlGetFiltrarInventario = '/getpBuscarProductoCategoriaEnInvenatrio/';
      private urlUpdateInventary = '/getpUpadateInventario/';

    constructor(
        private _http: HttpClient
      ){}

    loginTrabajador(correoElectronico: string, contrasena: string, sede: string): Observable<any> {
        return this._http.get(`${this.port}${this.urlLoginEmpleado}${correoElectronico}/${contrasena}`);
    }

    registrarTrabajador(name: string, apellido1: string, apellido2: string, cedula: number, cel: number, correo: string, pass: string): Observable<any> {
      return this._http.get(`${this.port}${this.urlRegisterEmpleado}${cedula}/${name}/${apellido1}/${apellido2}/${cel}/${correo}/${pass}`);
    }

    addingNewCategory(nameCategory: string, descriptionCategory: string): Observable<any> {
      return this._http.get(`${this.port}${this.urlAddCategory}${nameCategory}/${descriptionCategory}`);
    }

    getCategory(): Observable<any> {
      return this._http.get(`${this.port}${this.urlGetCategory}`);
    }

    getNameCategory(): Observable<any> {
      return this._http.get(`${this.port}${this.urlGetNameCategory}`);
    }

    addingNewProduct(nombre: string, categoria: string, descripcion: string, image: string, precio: number): Observable<any> {
      console.log(`${this.port}${this.urlAddProduct}${nombre}/${descripcion}/${categoria}/${image}/${precio}`)
      return this._http.get(`${this.port}${this.urlAddProduct}${nombre}/${descripcion}/${categoria}/${image}/${precio}`);
    }

    gerProductos(): Observable<any> {
      return this._http.get(`${this.port}${this.urlGetProduct}`);
    }

    getProductoName(): Observable<any> {
      return this._http.get(`${this.port}${this.urlGetOnlyNameProduct}`);
    }

    addingInventary(name: number, stock: number): Observable<any> {
      return this._http.get(`${this.port}${this.urlAddinInventary}${name}/${stock}`);
    }

    getInventary(): Observable<any> {
      return this._http.get(`${this.port}${this.urlGetInventary}`);
    }

    getFiltroInventary(producto: string, idCategoria: number): Observable<any> {
      return this._http.get(`${this.port}${this.urlGetFiltrarInventario}${producto}/${idCategoria}`);
    }

    getUpateInventary(idInventary: number, idProduct: number, cantidad: number): Observable<any> {
      console.log(idInventary, idProduct, cantidad)
      return this._http.get(`${this.port}${this.urlUpdateInventary}${idInventary}/${idProduct}/${cantidad}`);
    }
  }