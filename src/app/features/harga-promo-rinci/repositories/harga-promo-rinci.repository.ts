import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HargaPromoRinciService } from '../services/harga-promo-rinci.service';
import { HargaPromoRinci } from '../models/harga-promo-rinci.model';
import { HargaPromoRinciMapper } from './harga-promo-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class HargaPromoRinciRepository {
  constructor(private service: HargaPromoRinciService) {}

  getHargaPromoRincis(): Observable<HargaPromoRinci[]> {
    return this.service.getHargaPromoRincis().pipe(
      map(dtos => HargaPromoRinciMapper.toModelList(dtos))
    );
  }
}
