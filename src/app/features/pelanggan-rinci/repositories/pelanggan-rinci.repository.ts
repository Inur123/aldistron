import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PelangganRinciService } from '../services/pelanggan-rinci.service';
import { PelangganRinci } from '../models/pelanggan-rinci.model';
import { PelangganRinciMapper } from './pelanggan-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class PelangganRinciRepository {
  constructor(private service: PelangganRinciService) {}

  getPelangganRincis(): Observable<PelangganRinci[]> {
    return this.service.getPelangganRincis().pipe(
      map(dtos => PelangganRinciMapper.toModelList(dtos))
    );
  }
}
