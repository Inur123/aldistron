import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HargaDiskonProdukDto } from '../models/harga-diskon-produk.dto';

@Injectable({
  providedIn: 'root'
})
export class HargaDiskonProdukService {
  private readonly endpoint = 'harga-diskon-produk';

  constructor(private http: HttpClient) {}

  getHargaDiskonProduks(): Observable<HargaDiskonProdukDto[]> {
    return this.http.get<HargaDiskonProdukDto[]>("https://api.aldistron.com/harga-diskon-produk");
  }
}
