import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RuteKunjungService } from '../services/rute-kunjung.service';
import { RuteKunjung } from '../models/rute-kunjung.model';
import { RuteKunjungMapper } from './rute-kunjung.mapper';

@Injectable({
  providedIn: 'root'
})
export class RuteKunjungRepository {
  constructor(private service: RuteKunjungService) {}

  getRuteKunjungs(): Observable<RuteKunjung[]> {
    return this.service.getRuteKunjungs().pipe(
      map(dtos => RuteKunjungMapper.toModelList(dtos))
    );
  }
}
