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
        nama_brand: 'ROG',
        keterangan_brand: 'Republic of Gamers by Asus',
        created_at: '2026-07-22T08:00:00Z',
        updated_at: '2026-07-22T08:00:00Z',
        deleted_at: null,
      },
      {
        id: 2,
        id_aoldatabase: 101,
        id_aoldb: 1,
        id_vendor: 5,
        nama_brand: 'Samsung Galaxy',
        keterangan_brand: 'Flagship Smartphone Samsung',
        created_at: '2026-07-22T08:00:00Z',
        updated_at: '2026-07-22T08:00:00Z',
        deleted_at: null,
      },
      {
        id: 3,
        id_aoldatabase: 101,
        id_aoldb: 1,
        id_vendor: 6,
        nama_brand: 'Apple Think',
        keterangan_brand: 'MacBook & iPad lineup',
        created_at: '2026-07-22T08:00:00Z',
        updated_at: '2026-07-22T08:00:00Z',
        deleted_at: null,
      },
    ]);
  }
}
