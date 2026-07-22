import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HargaPromoProdukService } from '../services/harga-promo-produk.service';
import { HargaPromoProduk } from '../models/harga-promo-produk.model';
import { HargaPromoProdukMapper } from './harga-promo-produk.mapper';

@Injectable({
  providedIn: 'root'
})
export class HargaPromoProdukRepository {
  constructor(private service: HargaPromoProdukService) {}

  getHargaPromoProduks(): Observable<HargaPromoProduk[]> {
    return this.service.getHargaPromoProduks().pipe(
      map(dtos => HargaPromoProdukMapper.toModelList(dtos))
    );
  }
}
