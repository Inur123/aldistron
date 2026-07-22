import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PengaturanDto } from '../models/pengaturan.dto';

@Injectable({
  providedIn: 'root'
})
export class PengaturanService {
  getPengaturans(): Observable<PengaturanDto[]> {
    return of([
      {
        id: 1,
        id_aoldatabase: 101,
        id_aoldb: 1,
        perusahaan: 'PT Aldistron Mandiri',
        parameter: 'APP_THEME',
        nama_param: 'Theme Mode',
        nama_slug: 'app-theme',
        param_int: 1,
        param_string: 'dark',
        kat_string: 'ui',
        param_array: '',
        keterangan: 'Tema default aplikasi',
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
