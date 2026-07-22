import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProvinceService } from '../services/province.service';
import { Province } from '../models/province.model';
import { ProvinceMapper } from './province.mapper';

@Injectable({
  providedIn: 'root'
})
export class ProvinceRepository {
  constructor(private service: ProvinceService) {}

  getProvinces(): Observable<Province[]> {
    return this.service.getProvinces().pipe(
      map(dtos => ProvinceMapper.toModelList(dtos))
    );
  }
}
