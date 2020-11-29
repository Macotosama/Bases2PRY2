import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Service } from '../services/Service';

@Component({
  selector: 'app-registerbusiness',
  templateUrl: './registerbusiness.component.html',
  styleUrls: ['./registerbusiness.component.scss']
})
export class RegisterbusinessComponent implements OnInit {
  public nombre = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ]*'),
    Validators.maxLength(30)
  ]);
  public apellido1 = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ]*'),
    Validators.maxLength(30)
  ]);
  public apellido2 = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ]*'),
    Validators.maxLength(30)
  ]);
  public cedula = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9 ]*'),
    Validators.maxLength(9)
  ]);
  public telefono = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9 ]*'),
    Validators.maxLength(12)
  ]);
  public provincia = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ]*'),
    Validators.maxLength(30)
  ]);
  public distrito = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ]*'),
    Validators.maxLength(30)
  ]);
  public canton = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ]*'),
    Validators.maxLength(30)
  ]);
  public barrio = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ]*'),
    Validators.maxLength(30)
  ]);
  public senas = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ]*'),
    Validators.maxLength(50)
  ]);

  public sede = new FormControl('', [
    Validators.required
  ]);

  public correo = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public contrasena = new FormControl('', [
    Validators.required,
    Validators.maxLength(16),
  ]);

  constructor(private servicios: Service) { }

  ngOnInit(): void {
  }

  enviarInfo():void {
    this.servicios.registrarTrabajador(this.nombre.value, this.apellido1.value,this.apellido2.value,this.cedula.value,
      this.telefono.value, this.correo.value, this.contrasena.value).subscribe(Cliente => {
        console.log(Cliente);
      // this.contenidos = Cliente;
    });
  }

}