import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProdukKategoriDto } from '../models/produk-kategori.dto';

@Injectable({
  providedIn: 'root'
})
export class ProdukKategoriService {
  getCategories(): Observable<ProdukKategoriDto[]> {
    return of([
      {
        id: 10,
        id_aoldatabase: 101,
        id_aoldb: 1,
        id_aolitemcat: 301,
        nama_kategori: 'Laptop & Komputer',
        keterangan_kategori: 'Kategori Hardware',
        parent_id: 0,
        haschild: true,
        log_aolcat_id: 1,
        connection_aol: true,
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
