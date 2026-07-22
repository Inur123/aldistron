import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PelangganPersonalDto } from '../models/pelanggan-personal.dto';

@Injectable({
  providedIn: 'root'
})
export class PelangganPersonalService {
  private readonly endpoint = 'pelanggan-personal';

  constructor(private http: HttpClient) {}

  getPelangganPersonals(): Observable<PelangganPersonalDto[]> {
    return this.http.get<PelangganPersonalDto[]>("${environment.apiUrl}/pelanggan-personal");
  }
}
