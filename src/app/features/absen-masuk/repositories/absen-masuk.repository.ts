import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AbsenMasukService } from '../services/absen-masuk.service';
import { AbsenMasuk } from '../models/absen-masuk.model';
import { AbsenMasukMapper } from './absen-masuk.mapper';

@Injectable({
  providedIn: 'root'
})
export class AbsenMasukRepository {
  constructor(private service: AbsenMasukService) {}

  getAbsenMasuks(): Observable<AbsenMasuk[]> {
    return this.service.getAbsenMasuks().pipe(
      map(dtos => AbsenMasukMapper.toModelList(dtos))
    );
  }
}
