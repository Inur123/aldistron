import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VendorKategoriDto } from '../models/vendor-kategori.dto';


@Injectable({
  providedIn: 'root'
})
export class VendorKategoriService {
  getCategories(): Observable<VendorKategoriDto[]> {
    return of([
      {
        id: 1,
        id_aoldatabase: 101,
        id_aoldb: 1,
        id_aolvencat: 50,
        nama_kategori: 'Supplier Hardware',
        keterangan_kategori: 'Penyedia komponen utama',
        parent_id: 0,
        haschild: false,
        log_aolcat_id: 1,
        connection_aol: true,
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
