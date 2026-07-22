import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PelangganService } from '../services/pelanggan.service';
import { Pelanggan } from '../models/pelanggan.model';
import { PelangganMapper } from './pelanggan.mapper';

@Injectable({
  providedIn: 'root'
})
export class PelangganRepository {
  constructor(private service: PelangganService) {}

  getPelanggans(): Observable<Pelanggan[]> {
    return this.service.getPelanggans().pipe(
      map(dtos => PelangganMapper.toModelList(dtos))
    );
  }
}
