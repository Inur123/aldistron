import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { KunjunganJualRinciService } from '../services/kunjungan-jual-rinci.service';
import { KunjunganJualRinci } from '../models/kunjungan-jual-rinci.model';
import { KunjunganJualRinciMapper } from './kunjungan-jual-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class KunjunganJualRinciRepository {
  constructor(private service: KunjunganJualRinciService) {}

  getKunjunganJualRincis(): Observable<KunjunganJualRinci[]> {
    return this.service.getKunjunganJualRincis().pipe(
      map(dtos => KunjunganJualRinciMapper.toModelList(dtos))
    );
  }
}
