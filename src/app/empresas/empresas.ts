import { Component } from '@angular/core';
import { Empresa } from '../models/empresa.model';
import { EmpresaService } from '../services/empresa.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empresas',
  imports: [NgFor, FormsModule],
  templateUrl: './empresas.html',
  styleUrl: './empresas.css',
})
export class Empresas {
  public empresas: Empresa[] = [];
  public empresa: Empresa = {
    nombre: '',
    nit: '',
    ciudad: '',
    sector: '',
  } as Empresa;

  constructor(private empresaService: EmpresaService) {}

  ngOnInit() {
    this.empresaService.tomarTodas().subscribe((emps) => {
      this.empresas = emps;
    });
  }

  onCreate() {
    this.empresaService.crear(this.empresa).subscribe(() => {
      this.empresaService.tomarTodas().subscribe((emps) => (this.empresas = emps));
    });
  }
}
