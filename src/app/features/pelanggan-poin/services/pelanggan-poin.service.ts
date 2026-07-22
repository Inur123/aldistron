import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PelangganPoinDto } from '../models/pelanggan-poin.dto';

@Injectable({
  providedIn: 'root'
})
export class PelangganPoinService {
  getPoins(): Observable<PelangganPoinDto[]> {
    return of([
      {
        id: 1,
        id_userdata: 10,
        id_pelanggan: 1,
        id_jual: 100,
        id_tagih: 50,
        id_event: 5,
        nama_event: 'Promo Belanja Juli',
        poin_masuk: 50,
        poin_keluar: 0,
        keterangan: 'Bonus transaksi bulanan',
        poin_saldo: 50,
        aktif_event: true,
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
