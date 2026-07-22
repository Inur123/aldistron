import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DistrictService } from '../services/district.service';
import { District } from '../models/district.model';
import { DistrictMapper } from './district.mapper';

@Injectable({
  providedIn: 'root'
})
export class DistrictRepository {
  constructor(private service: DistrictService) {}

  getDistricts(): Observable<District[]> {
    return this.service.getDistricts().pipe(
      map(dtos => DistrictMapper.toModelList(dtos))
    );
  }
}
