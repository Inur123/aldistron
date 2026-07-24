import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';
import { DashboardSummary } from '../models/dashboard.model';
import { DashboardMapper } from './dashboard.mapper';

@Injectable({
  providedIn: 'root'
})
export class DashboardRepository {
  constructor(private service: DashboardService) {}

  getDashboardSummary(): Observable<DashboardSummary> {
    return this.service.getDashboardSummary().pipe(
      map(res => DashboardMapper.toModel(res.data))
    );
  }
}
