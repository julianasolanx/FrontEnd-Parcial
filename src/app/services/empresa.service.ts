import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from '../models/empresa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  private readonly url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  tomarTodas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.url);
  }

  tomarPorId(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.url}/${id}`);
  }

  crear(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.url, empresa);
  }
}
