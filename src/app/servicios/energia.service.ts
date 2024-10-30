import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Energia } from '../clases/energia';

@Injectable({
  providedIn: 'root'
})
export class EnergiaService {
  // Usa string en lugar de String
  private url: string = 'tu-url-aqui';

  constructor(private http: HttpClient) { }

  getEnergias(): Observable<Energia[]> {
    // Añade el tipo correcto y las cabeceras HTTP
    return this.http.get<Energia[]>(this.url, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

