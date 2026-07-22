import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { JangkaPiutangService } from '../services/jangka-piutang.service';
import { JangkaPiutang } from '../models/jangka-piutang.model';
import { JangkaPiutangMapper } from './jangka-piutang.mapper';


@Injectable({
  providedIn: 'root'
})
export class JangkaPiutangRepository {
  constructor(private service: JangkaPiutangService) {}

  getJangkaPiutangs(): Observable<JangkaPiutang[]> {
    return this.service.getJangkaPiutangs().pipe(
      map(dtos => JangkaPiutangMapper.toModelList(dtos))
    );
  }
}
