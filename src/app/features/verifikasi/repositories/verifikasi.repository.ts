import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { VerifikasiService } from '../services/verifikasi.service';
import { Verifikasi } from '../models/verifikasi.model';
import { VerifikasiMapper } from './verifikasi.mapper';


@Injectable({
  providedIn: 'root'
})
export class VerifikasiRepository {
  constructor(private verifikasiService: VerifikasiService) {}

  getVerifikasis(): Observable<Verifikasi[]> {
    return this.verifikasiService.getVerifikasis().pipe(
      map(dtos => VerifikasiMapper.toModelList(dtos))
    );
  }
}
