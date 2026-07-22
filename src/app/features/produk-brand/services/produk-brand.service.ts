import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProdukBrandDto } from '../models/produk-brand.dto';

@Injectable({
  providedIn: 'root'
})
export class ProdukBrandService {
  getBrands(): Observable<ProdukBrandDto[]> {
    return of([
      {
        id: 1,
        id_aoldatabase: 101,
        id_aoldb: 1,
        id_vendor: 5,
        nama_brand: 'Asus ROG',
        keterangan_brand: 'Brand Gaming Premium',
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
