import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PengirimanRinciBarangDto } from '../models/pengiriman-rinci-barang.dto';

@Injectable({
  providedIn: 'root'
})
export class PengirimanRinciBarangService {
  private readonly endpoint = 'pengiriman-rinci-barang';

  constructor(private http: HttpClient) {}

  getPengirimanRinciBarangs(): Observable<PengirimanRinciBarangDto[]> {
    return this.http.get<PengirimanRinciBarangDto[]>("https://api.aldistron.com/pengiriman-rinci-barang");
  }
}
