import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { KlaimBiayaRinciService } from '../services/klaim-biaya-rinci.service';
import { KlaimBiayaRinci } from '../models/klaim-biaya-rinci.model';
import { KlaimBiayaRinciMapper } from './klaim-biaya-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class KlaimBiayaRinciRepository {
  constructor(private service: KlaimBiayaRinciService) {}

  getKlaimBiayaRincis(): Observable<KlaimBiayaRinci[]> {
    return this.service.getKlaimBiayaRincis().pipe(
      map(dtos => KlaimBiayaRinciMapper.toModelList(dtos))
    );
  }
}
