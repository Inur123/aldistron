import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HargaPromoRinciDto } from '../models/harga-promo-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class HargaPromoRinciService {
  private readonly endpoint = 'harga-promo-rinci';

  constructor(private http: HttpClient) {}

  getHargaPromoRincis(): Observable<HargaPromoRinciDto[]> {
    return this.http.get<HargaPromoRinciDto[]>("https://api.aldistron.com/harga-promo-rinci");
  }
}
