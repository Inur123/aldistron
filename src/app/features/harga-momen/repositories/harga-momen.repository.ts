import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HargaMomenService } from '../services/harga-momen.service';
import { HargaMomen } from '../models/harga-momen.model';
import { HargaMomenMapper } from './harga-momen.mapper';

@Injectable({
  providedIn: 'root'
})
export class HargaMomenRepository {
  constructor(private service: HargaMomenService) {}

  getHargaMomens(): Observable<HargaMomen[]> {
    return this.service.getHargaMomens().pipe(
      map(dtos => HargaMomenMapper.toModelList(dtos))
    );
  }
}
