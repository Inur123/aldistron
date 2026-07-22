import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HargaMomenRinciService } from '../services/harga-momen-rinci.service';
import { HargaMomenRinci } from '../models/harga-momen-rinci.model';
import { HargaMomenRinciMapper } from './harga-momen-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class HargaMomenRinciRepository {
  constructor(private service: HargaMomenRinciService) {}

  getHargaMomenRincis(): Observable<HargaMomenRinci[]> {
    return this.service.getHargaMomenRincis().pipe(
      map(dtos => HargaMomenRinciMapper.toModelList(dtos))
    );
  }
}
