import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SiteLogService } from '../services/site-log.service';
import { SiteLog } from '../models/site-log.model';
import { SiteLogMapper } from './site-log.mapper';

@Injectable({
  providedIn: 'root'
})
export class SiteLogRepository {
  constructor(private service: SiteLogService) {}

  getSiteLogs(): Observable<SiteLog[]> {
    return this.service.getSiteLogs().pipe(
      map(dtos => SiteLogMapper.toModelList(dtos))
    );
  }
}
