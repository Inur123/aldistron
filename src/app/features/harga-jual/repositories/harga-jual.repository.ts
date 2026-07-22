import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HargaJualService } from '../services/harga-jual.service';
import { HargaJual } from '../models/harga-jual.model';
import { HargaJualMapper } from './harga-jual.mapper';

@Injectable({
  providedIn: 'root'
})
export class HargaJualRepository {
  constructor(private service: HargaJualService) {}

  getHargaJuals(): Observable<HargaJual[]> {
    return this.service.getHargaJuals().pipe(
      map(dtos => HargaJualMapper.toModelList(dtos))
    );
  }
}
