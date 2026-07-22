import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RuteKunjungRinciService } from '../services/rute-kunjung-rinci.service';
import { RuteKunjungRinci } from '../models/rute-kunjung-rinci.model';
import { RuteKunjungRinciMapper } from './rute-kunjung-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class RuteKunjungRinciRepository {
  constructor(private service: RuteKunjungRinciService) {}

  getRuteKunjungRincis(): Observable<RuteKunjungRinci[]> {
    return this.service.getRuteKunjungRincis().pipe(
      map(dtos => RuteKunjungRinciMapper.toModelList(dtos))
    );
  }
}
