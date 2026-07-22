import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VendorDto } from '../models/vendor.dto';


@Injectable({
  providedIn: 'root'
})
export class VendorService {
  getVendors(): Observable<VendorDto[]> {
    return of([
      {
        id: 5,
        id_aoldatabase: 101,
        id_aoldb: 1,
        id_cabang: 1,
        id_aolven: 20,
        id_jangkapiutang: 1,
        id_vendorkategori: 1,
        nomor_vendor: 'VND-005',
        nama_vendor: 'PT Asus Indonesia',
        keterangan_vendor: 'Supplier Distributor Resmi',
        log_aolcat_id: 1,
        log_aolbranch_id: 1,
        log_aolterm_id: 1,
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
