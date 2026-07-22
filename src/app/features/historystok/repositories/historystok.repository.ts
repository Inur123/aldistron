import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HistorystokService } from '../services/historystok.service';
import { Historystok } from '../models/historystok.model';
import { HistorystokMapper } from './historystok.mapper';

@Injectable({
  providedIn: 'root'
})
export class HistorystokRepository {
  constructor(private service: HistorystokService) {}

  getHistorystoks(): Observable<Historystok[]> {
    return this.service.getHistorystoks().pipe(
      map(dtos => HistorystokMapper.toModelList(dtos))
    );
  }
}
