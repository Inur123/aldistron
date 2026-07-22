import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GudangService } from '../services/gudang.service';
import { Gudang } from '../models/gudang.model';
import { GudangMapper } from './gudang.mapper';

@Injectable({
  providedIn: 'root'
})
export class GudangRepository {
  constructor(private service: GudangService) {}

  getGudangs(): Observable<Gudang[]> {
    return this.service.getGudangs().pipe(
      map(dtos => GudangMapper.toModelList(dtos))
    );
  }
}
