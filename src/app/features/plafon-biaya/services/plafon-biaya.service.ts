import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlafonBiayaDto } from '../models/plafon-biaya.dto';

@Injectable({
  providedIn: 'root'
})
export class PlafonBiayaService {
  private readonly endpoint = 'plafon-biaya';

  constructor(private http: HttpClient) {}

  getPlafonBiayas(): Observable<PlafonBiayaDto[]> {
    return this.http.get<PlafonBiayaDto[]>("${environment.apiUrl}/plafon-biaya");
  }
}
