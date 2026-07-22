import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PelangganRinciDto } from '../models/pelanggan-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class PelangganRinciService {
  getPelangganRincis(): Observable<PelangganRinciDto[]> {
    return of([
      {
        id: 1,
        id_pelanggan: 1,
        nama_pelanggan: 'Toko Sumber Makmur',
        kontak_pelanggan: 'Bpk Budi',
        kontak_email: 'budi@sumbermakmur.com',
        kontak_handphone: '081122334455',
        kontak_alamat: 'Jl. Ahmad Yani No. 10',
        alamat_kirim_pelanggan: 'Gudang Utama Jl. Ahmad Yani No. 10',
        kode_desa: '351501002',
        desa_pelanggan: 10,
        kecamatan_pelanggan: 5,
        kota_pelanggan: 2,
        propinsi_pelanggan: 1,
        negara_pelanggan: 1,
        latlong_pelanggan: '-7.41,112.59',
        alamat_tagih_pelanggan: 'Jl. Ahmad Yani No. 10',
        telp_pelanggan: '031-891111',
        handphone_pelanggan: '081122334455',
        email_pelanggan: 'info@sumbermakmur.com',
        nik_pelanggan: '3515011122334455',
        npwp_pelanggan: '01.999.888.7-654.000',
        keterangan_pelanggan: 'Pelanggan VIP',
        infokhusus_pelanggan: 'Toko buka jam 08:00 WIB',
        image_pelanggan: '',
        image_ktp: '',
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
