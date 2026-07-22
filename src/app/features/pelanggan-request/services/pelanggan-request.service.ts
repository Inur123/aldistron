import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PelangganRequestDto } from '../models/pelanggan-request.dto';

@Injectable({
  providedIn: 'root'
})
export class PelangganRequestService {
  getRequests(): Observable<PelangganRequestDto[]> {
    return of([
      {
        id: 1,
        id_aoldatabase: 101,
        id_aoldb: 1,
        id_cabang: 1,
        nama_administrator: 'Sales Admin',
        email_administrator: 'sales@aldistron.com',
        kategori_pelanggan: 'Retail',
        nama_pelanggan: 'Calon Toko Maju Jaya',
        kontak_pelanggan: 'Bpk Ahmad',
        kontak_email: 'ahmad@majujaya.com',
        kontak_handphone: '081234567890',
        kontak_alamat: 'Jl. Pemuda No. 45',
        alamat_kirim_pelanggan: 'Jl. Pemuda No. 45',
        kode_desa: '351501001',
        desa_pelanggan: 'Siwalan',
        kecamatan_pelanggan: 'Krian',
        kota_pelanggan: 'Sidoarjo',
        propinsi_pelanggan: 'Jawa Timur',
        negara_pelanggan: 'Indonesia',
        latlong_pelanggan: '-7.40,112.58',
        alamat_tagih_pelanggan: 'Jl. Pemuda No. 45',
        telp_pelanggan: '031-890000',
        email_pelanggan: 'info@majujaya.com',
        handphone_pelanggan: '081234567890',
        nik_pelanggan: '3515019988776655',
        npwp_pelanggan: '01.234.567.8-901.000',
        keterangan_pelanggan: 'Request pendaftaran pelanggan baru',
        status_usaha: 'Toko Kelontong',
        luas_tempat: 50,
        status_tempat: 'Milik Sendiri',
        image_pelanggan: '',
        image_ktp: '',
        id_userrequest: 10,
        potensial_pelanggan: 'Tinggi',
        id_uservalidasi: 2,
        validasi_pelanggan: 'Disetujui',
        supplier_pelanggan: 'Utama',
        produk_pelanggan: 'Elektronik',
        feedback_lingkungan: 'Sangat Baik',
        feedback_salesman: 'Direkomendasikan',
        feedback_supplier: 'Lancar',
        plafon_pelanggan: 10000000,
        id_userrelease: 2,
        release_pelanggan: true,
        id_usergenerate: 2,
        status_generate: true,
        blacklist: false,
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
