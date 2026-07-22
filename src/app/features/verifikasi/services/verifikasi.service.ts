import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VerifikasiDto } from '../models/verifikasi.dto';

@Injectable({
  providedIn: 'root'
})
export class VerifikasiService {
  getVerifikasis(): Observable<VerifikasiDto[]> {
    return of([
      {
        id: 1,
        id_aoldatabase: 101,
        id_aoldb: 1,
        perusahaan: 'PT Aldistron Mandiri',
        nama_administrator: 'Administrator',
        email_administrator: 'admin@aldistron.com',
        email_aolconnector: 'connector@aldistron.com',
        serial_number: 'SN-VER-998877',
        kode_maksimal: 100,
        expired_date: '2027-12-31T23:59:59Z',
        serial_aktif: true,
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
