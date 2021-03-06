import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-cliente',
  templateUrl: './barra-cliente.component.html',
  styleUrls: ['./barra-cliente.component.scss']
})
export class BarraClienteComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    @Input()
    total: number = 0;

  constructor(private breakpointObserver: BreakpointObserver,  private _router: Router) {
  }

  actualizar(nuevoTotal: number): void {
    this.total = nuevoTotal;
    console.log(this.total)
    // document.body.;
  }

  operCartView():void {
    this._router.navigate(['/cartshow']);
  }

}
