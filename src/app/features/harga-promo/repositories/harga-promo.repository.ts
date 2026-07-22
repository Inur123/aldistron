import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HargaPromoService } from '../services/harga-promo.service';
import { HargaPromo } from '../models/harga-promo.model';
import { HargaPromoMapper } from './harga-promo.mapper';

@Injectable({
  providedIn: 'root'
})
export class HargaPromoRepository {
  constructor(private service: HargaPromoService) {}

  getHargaPromos(): Observable<HargaPromo[]> {
    return this.service.getHargaPromos().pipe(
      map(dtos => HargaPromoMapper.toModelList(dtos))
    );
  }
}
