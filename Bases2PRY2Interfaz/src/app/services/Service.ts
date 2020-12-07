import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrito, Inventario, ItemCarrito } from '../models/model_producto';
import { Cliente } from '../models/model_person';
import { Certificate } from 'crypto';

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
      private portAdmin = 'http://localhost:8500';

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
      private urlRegisterCliente = '/getpCrearPersonaCliente/';
      private urlLoginCliente = '/getpValidacionDeCliente/';
      private urlValiInventario = '/getpValidarCantidadRequerida/';
      private urlPagar = '/getpPagonPorInetervalos';
      private urlOrdenCompra = '/getpCrearOrdenDeCompra';
      private urlFactura = '/getpCrearFactura';
      private urlXDFilltroInventario = '/getpBuscarProductoCategoriaEnInvenatrio/';
      private urlCrearAdmin = '/getpCrearPersonaCorp';
      private urlValiCrearAdmin = '/getpValidarSiExiteUnCorporativo';
      private urlLogin = '/getpValidarCorporativo/';
      private urlTotalSucursalLim = '/getpTotalesDeFacturas';
      private urlTotalSucursalCar = '/getpTotalesDeFacturasCartago';
      private urlTotaltotal = '/getpTotalConsolidado';
      private urlInventarioAdminCar = '/getpRetornoInventarioCartago';
      private urlInventarioAdminLim = '/getpRetornoInventariLimon';

    constructor(
        private _http: HttpClient
    ){}

    inventarioCar():Observable<any> {
      return this._http.get(`${this.portAdmin}${this.urlInventarioAdminCar}`)
    }

    inventarioLim():Observable<any> {
      return this._http.get(`${this.portAdmin}${this.urlInventarioAdminLim}`)
    }

    inventarioAdmin(sede:string, producto: string, idCategoria: number):Observable<any> {
      var urlTemp
      if (sede == 'car') {
        urlTemp = this.urlTotalSucursalCar
      } else {
        urlTemp = this.urlTotalSucursalLim
      }
      return this._http.get(`${this.portAdmin}${this.urlXDFilltroInventario}${producto}/${idCategoria}`);
    }

    totaltotal (categoria: number ,fecha: Date, fecha2: Date):Observable<any> {
      var c = {
        fecha1: `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()}`,
        fecha2: `${fecha2.getFullYear()}-${fecha2.getMonth()+1}-${fecha2.getDate()}`,
        categoria: categoria,
      }
      return this._http.post(`${this.portAdmin}${this.urlTotaltotal}`, c, httpOption)
    }

    totalPorSede(categoria: number ,fecha: Date, fecha2: Date, sede: string):Observable<any> {
      var urlTemp
      if (sede == 'car') {
        urlTemp = this.urlTotalSucursalCar
      } else {
        urlTemp = this.urlTotalSucursalLim
      }
      var c = {
        fecha1: `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()}`,
        fecha2: `${fecha2.getFullYear()}-${fecha2.getMonth()+1}-${fecha2.getDate()}`,
        categoria: categoria,
        sede: sede
      }
      return this._http.post(`${this.portAdmin}${urlTemp}`, c, httpOption)
    }

    loginAdmin(correo: string, contra: string):Observable<any> {
      return this._http.get(`${this.port}${this.urlLogin}${correo}/${contra}`)
    }

    registrarAdmin(name: string, apellido1: string, apellido2: string, cedula: number, cel: number, correo: string, pass: string, provincia: string,
      distrito: string, canton: string, bario: string, senna: string): Observable<any> {
      var temp = {
        cedula: +cedula,
        nombre: name,
        apellido1: apellido1,
        apellido2: apellido2,
        telefono: +cel,
        correo: correo,
        password: pass,
        senas: senna,
        barrio: bario,
        distrito: distrito,
        canton: canton,
        provincia: provincia
      }
      return this._http.post(`${this.port}${this.urlCrearAdmin}`, temp, httpOption);
    }

    valiRegisterAdmin(ce: number): Observable<any> {
      return this._http.post(`${this.port}${this.urlValiCrearAdmin}`, {cedula: +ce}, httpOption)
    }

    crearFactura(sede: string, orde: any):Observable<any> {
      return this._http.post(`${this.port}${this.urlFactura}`,{sede: sede, order: orde[0].IdOrdenDeCompra}, httpOption);
    }

    pedirOrdenCompra():Observable<any> {
      var cliente:Cliente[] = JSON.parse(localStorage.getItem('cliente'));
      return this._http.post(`${this.port}${this.urlOrdenCompra}`, cliente, httpOption);
    }
    enviarPagoLista(carri: ItemCarrito[], orde: any):Observable<any> {
      console.log(orde, 'buenos dias')
      return this._http.post(`${this.port}${this.urlPagar}`, [orde[0]].concat(carri), httpOption);
    }

    enviarPago(inventario: Inventario):Observable<any> {
    console.log(inventario)
      return this._http.post(`${this.port}${this.urlPagar}`, inventario, httpOption);
      // return this._http.post(`${this.port}${this.urlPagar}`,inventario);
    }

    ValidarInventario(id: number, stock: number): Observable<any>{
      return this._http.get(`${this.port}${this.urlValiInventario}${id}/${stock}`);
    }

    loginCliente(correoElectronico: string, contrasena: string, sede: string): Observable<any> {
        return this._http.get(`${this.port}${this.urlLoginCliente}${correoElectronico}/${contrasena}`);
    }

    loginTrabajador(correoElectronico: string, contrasena: string, sede: string): Observable<any> {
        return this._http.get(`${this.port}${this.urlLoginEmpleado}${correoElectronico}/${contrasena}`);
    }

    registrarTrabajador(name: string, apellido1: string, apellido2: string, cedula: number, cel: number, correo: string, pass: string, provincia: string,
      distrito: string, canton: string, bario: string, senna: string): Observable<any> {
      return this._http.get(`${this.port}${this.urlRegisterEmpleado}${cedula}/${name}/${apellido1}/${apellido2}/${cel}/${correo}/${pass}/${senna}/${bario}/${distrito}/${canton}/${provincia}`);
    }

    registrarCliente(name: string, apellido1: string, apellido2: string, cedula: number, cel: number, correo: string, pass: string, provincia: string,
      distrito: string, canton: string, bario: string, senna: string): Observable<any> {
      return this._http.get(`${this.port}${this.urlRegisterCliente}${cedula}/${name}/${apellido1}/${apellido2}/${cel}/${correo}/${pass}/${senna}/${bario}/${distrito}/${canton}/${provincia}`);
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

    getFiltroInventaryCliente(producto: string, idCategoria: number): Observable<any> {
      return this._http.get(`${this.port}${this.urlXDFilltroInventario}${producto}/${idCategoria}`);
    }

    getUpateInventary(idInventary: number, idProduct: number, cantidad: number): Observable<any> {
      console.log(idInventary, idProduct, cantidad)
      return this._http.get(`${this.port}${this.urlUpdateInventary}${idInventary}/${idProduct}/${cantidad}`);
    }
  }