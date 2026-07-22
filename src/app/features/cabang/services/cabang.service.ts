import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CabangDto } from '../models/cabang.dto';

@Injectable({
  providedIn: 'root'
})
export class CabangService {
  getCabangs(): Observable<CabangDto[]> {
    return of([
      {
        id: 1,
        id_aoldatabase: 101,
        id_aoldb: 1,
        id_aolcab: 10,
        nama_cabang: 1,
        alamat_cabang: 'Jl. Raya Surabaya No. 123',
        telp_cabang: '031-123456',
        handphone_cabang: '081299887766',
        pic_cabang: 5,
        default_cabang: true,
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
