import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KabarPasarDto } from '../models/kabar-pasar.dto';

@Injectable({
  providedIn: 'root'
})
export class KabarPasarService {
  private readonly endpoint = 'kabar-pasar';

  constructor(private http: HttpClient) {}

  getKabarPasars(): Observable<KabarPasarDto[]> {
    return this.http.get<KabarPasarDto[]>("${environment.apiUrl}/kabar-pasar");
  }
}
