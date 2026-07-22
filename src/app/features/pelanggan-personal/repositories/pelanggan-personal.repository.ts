import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PelangganPersonalService } from '../services/pelanggan-personal.service';
import { PelangganPersonal } from '../models/pelanggan-personal.model';
import { PelangganPersonalMapper } from './pelanggan-personal.mapper';

@Injectable({
  providedIn: 'root'
})
export class PelangganPersonalRepository {
  constructor(private service: PelangganPersonalService) {}

  getPelangganPersonals(): Observable<PelangganPersonal[]> {
    return this.service.getPelangganPersonals().pipe(
      map(dtos => PelangganPersonalMapper.toModelList(dtos))
    );
  }
}
