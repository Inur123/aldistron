import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HargaJualRinciService } from '../services/harga-jual-rinci.service';
import { HargaJualRinci } from '../models/harga-jual-rinci.model';
import { HargaJualRinciMapper } from './harga-jual-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class HargaJualRinciRepository {
  constructor(private service: HargaJualRinciService) {}

  getHargaJualRincis(): Observable<HargaJualRinci[]> {
    return this.service.getHargaJualRincis().pipe(
      map(dtos => HargaJualRinciMapper.toModelList(dtos))
    );
  }
}
