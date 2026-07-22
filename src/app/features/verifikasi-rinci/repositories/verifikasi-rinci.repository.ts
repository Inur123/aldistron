import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { VerifikasiRinciService } from '../services/verifikasi-rinci.service';
import { VerifikasiRinci } from '../models/verifikasi-rinci.model';
import { VerifikasiRinciMapper } from './verifikasi-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class VerifikasiRinciRepository {
  constructor(private service: VerifikasiRinciService) {}

  getVerifikasiRincis(): Observable<VerifikasiRinci[]> {
    return this.service.getVerifikasiRincis().pipe(
      map(dtos => VerifikasiRinciMapper.toModelList(dtos))
    );
  }
}
