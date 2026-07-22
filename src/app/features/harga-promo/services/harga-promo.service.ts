import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HargaPromoDto } from '../models/harga-promo.dto';

@Injectable({
  providedIn: 'root'
})
export class HargaPromoService {
  private readonly endpoint = 'harga-promo';

  constructor(private http: HttpClient) {}

  getHargaPromos(): Observable<HargaPromoDto[]> {
    return this.http.get<HargaPromoDto[]>("${environment.apiUrl}/harga-promo");
  }
}
