import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HargaPaketRinciService } from '../services/harga-paket-rinci.service';
import { HargaPaketRinci } from '../models/harga-paket-rinci.model';
import { HargaPaketRinciMapper } from './harga-paket-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class HargaPaketRinciRepository {
  constructor(private service: HargaPaketRinciService) {}

  getHargaPaketRincis(): Observable<HargaPaketRinci[]> {
    return this.service.getHargaPaketRincis().pipe(
      map(dtos => HargaPaketRinciMapper.toModelList(dtos))
    );
  }
}
