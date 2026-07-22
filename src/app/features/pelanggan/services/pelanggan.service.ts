import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PelangganDto } from '../models/pelanggan.dto';


@Injectable({
  providedIn: 'root'
})
export class PelangganService {
  getPelanggans(): Observable<PelangganDto[]> {
    return of([
      {
        id: 1,
        id_aoldatabase: 101,
        id_aoldb: 1,
        id_cabang: 1,
        id_aolcust: 50,
        id_aolsales: 2,
        id_jangkapiutang: 1,
        id_pelanggankategori: 1,
        nomor_pelanggan: 'CUST-001',
        nama_pelanggan: 'Toko Sumber Makmur',
        siklus_kunjungan: 'Mingguan',
        hari_kunjungan: 'Senin',
        id_hargajual: 1,
        id_hargadiskon: 0,
        id_hargapromo: 0,
        id_hargapaket: 0,
        id_hargamomen: 0,
        id_piutangplafon: 1,
        id_piutangmomen: 0,
        aktif_pelanggan: true,
        price_pelanggan: 'Standard',
        log_aolcat_id: 1,
        log_aolbranch_id: 1,
        log_aolsales_id: 1,
        log_aolterm_id: 1,
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
