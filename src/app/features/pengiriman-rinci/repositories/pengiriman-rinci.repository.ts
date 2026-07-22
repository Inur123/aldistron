import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PengirimanRinciService } from '../services/pengiriman-rinci.service';
import { PengirimanRinci } from '../models/pengiriman-rinci.model';
import { PengirimanRinciMapper } from './pengiriman-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class PengirimanRinciRepository {
  constructor(private service: PengirimanRinciService) {}

  getPengirimanRincis(): Observable<PengirimanRinci[]> {
    return this.service.getPengirimanRincis().pipe(
      map(dtos => PengirimanRinciMapper.toModelList(dtos))
    );
  }
}
