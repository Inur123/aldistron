import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HargaPromoProdukDto } from '../models/harga-promo-produk.dto';

@Injectable({
  providedIn: 'root'
})
export class HargaPromoProdukService {
  private readonly endpoint = 'harga-promo-produk';

  constructor(private http: HttpClient) {}

  getHargaPromoProduks(): Observable<HargaPromoProdukDto[]> {
    return this.http.get<HargaPromoProdukDto[]>("https://api.aldistron.com/harga-promo-produk");
  }
}
