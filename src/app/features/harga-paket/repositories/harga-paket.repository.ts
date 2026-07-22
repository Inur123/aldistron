import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HargaPaketService } from '../services/harga-paket.service';
import { HargaPaket } from '../models/harga-paket.model';
import { HargaPaketMapper } from './harga-paket.mapper';

@Injectable({
  providedIn: 'root'
})
export class HargaPaketRepository {
  constructor(private service: HargaPaketService) {}

  getHargaPakets(): Observable<HargaPaket[]> {
    return this.service.getHargaPakets().pipe(
      map(dtos => HargaPaketMapper.toModelList(dtos))
    );
  }
}
