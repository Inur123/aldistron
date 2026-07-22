import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AolDatabaseDto } from '../models/aol-database.dto';

@Injectable({
  providedIn: 'root'
})
export class AolDatabaseService {
  getDatabases(): Observable<AolDatabaseDto[]> {
    return of([
      {
        id: 101,
        id_aoldb: 1,
        id_aoltoken: 99,
        nama_aoldatabase: 'AOL Main DB',
        aktif_aoldatabase: true,
        sync_satu: true,
        sync_dua: true,
        accessible_until_aoldatabase: '2027-12-31T23:59:59Z',
        user_aolconnector: 'admin',
        email_aolconnector: 'admin@zainur.biz.id',
        handphone_aoldatabase: '08123456789',
        id_alserwa: 'ALS-001',
        sync_employee: true,
        id_employee: 1,
        id_salesman: 2,
        kode_seri_koneksi: 'SERI-AOL-12345',
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
