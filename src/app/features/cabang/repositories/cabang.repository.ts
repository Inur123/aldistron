import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CabangService } from '../services/cabang.service';
import { Cabang } from '../models/cabang.model';
import { CabangMapper } from './cabang.mapper';


@Injectable({
  providedIn: 'root'
})
export class CabangRepository {
  constructor(private cabangService: CabangService) {}

  getCabangs(): Observable<Cabang[]> {
    return this.cabangService.getCabangs().pipe(
      map(dtos => CabangMapper.toModelList(dtos))
    );
  }
}
