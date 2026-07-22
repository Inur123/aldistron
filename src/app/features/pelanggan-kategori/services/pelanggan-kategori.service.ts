import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PelangganKategoriDto } from '../models/pelanggan-kategori.dto';

@Injectable({
  providedIn: 'root'
})
export class PelangganKategoriService {
  private readonly endpoint = 'pelanggan-kategori';

  constructor(private http: HttpClient) {}

  getPelangganKategoris(): Observable<PelangganKategoriDto[]> {
    return this.http.get<PelangganKategoriDto[]>("${environment.apiUrl}/pelanggan-kategori");
  }
}
