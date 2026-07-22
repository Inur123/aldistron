import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HistorystokRinciService } from '../services/historystok-rinci.service';
import { HistorystokRinci } from '../models/historystok-rinci.model';
import { HistorystokRinciMapper } from './historystok-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class HistorystokRinciRepository {
  constructor(private service: HistorystokRinciService) {}

  getHistorystokRincis(): Observable<HistorystokRinci[]> {
    return this.service.getHistorystokRincis().pipe(
      map(dtos => HistorystokRinciMapper.toModelList(dtos))
    );
  }
}
