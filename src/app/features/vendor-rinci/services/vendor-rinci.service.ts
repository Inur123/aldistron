import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VendorRinciDto } from '../models/vendor-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class VendorRinciService {
  getVendorRincis(): Observable<VendorRinciDto[]> {
    return of([
      {
        id: 1,
        id_vendor: 5,
        nama_vendor: 'PT Asus Indonesia',
        kontak_vendor: 'Bpk Joko',
        alamat_gudang: 'Kawasan Industri Pulogadung',
        desa_vendor: 1,
        kecamatan_vendor: 1,
        kota_vendor: 1,
        propinsi_vendor: 1,
        negara_vendor: 1,
        latlong_vendor: '-6.20,106.81',
        alamat_bayar_vendor: 'Kawasan Industri Pulogadung',
        telp_vendor: '021-4600000',
        handphone_vendor: '081555443322',
        email_vendor: 'supplier@asus.co.id',
        nik_vendor: '3171010101010001',
        npwp_vendor: '01.111.222.3-444.000',
        keterangan_vendor: 'Distributor Resmi Asus',
        infokhusus_vendor: 'Pembayaran H+30',
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
