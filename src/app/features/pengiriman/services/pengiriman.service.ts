import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PengirimanDto } from '../models/pengiriman.dto';

@Injectable({
  providedIn: 'root'
})
export class PengirimanService {
  private readonly endpoint = 'pengiriman';

  constructor(private http: HttpClient) {}

  getPengirimans(): Observable<PengirimanDto[]> {
    return this.http.get<PengirimanDto[]>("https://api.aldistron.com/pengiriman");
  }
}
