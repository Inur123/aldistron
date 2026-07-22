import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { InfoKhususService } from '../services/info-khusus.service';
import { InfoKhusus } from '../models/info-khusus.model';
import { InfoKhususMapper } from './info-khusus.mapper';

@Injectable({
  providedIn: 'root'
})
export class InfoKhususRepository {
  constructor(private service: InfoKhususService) {}

  getInfoKhususs(): Observable<InfoKhusus[]> {
    return this.service.getInfoKhususs().pipe(
      map(dtos => InfoKhususMapper.toModelList(dtos))
    );
  }
}
