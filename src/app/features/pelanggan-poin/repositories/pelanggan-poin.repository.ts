import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PelangganPoinService } from '../services/pelanggan-poin.service';
import { PelangganPoin } from '../models/pelanggan-poin.model';
import { PelangganPoinMapper } from './pelanggan-poin.mapper';

@Injectable({
  providedIn: 'root'
})
export class PelangganPoinRepository {
  constructor(private service: PelangganPoinService) {}

  getPoins(): Observable<PelangganPoin[]> {
    return this.service.getPoins().pipe(
      map(dtos => PelangganPoinMapper.toModelList(dtos))
    );
  }
}
