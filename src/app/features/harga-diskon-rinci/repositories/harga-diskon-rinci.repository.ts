import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HargaDiskonRinciService } from '../services/harga-diskon-rinci.service';
import { HargaDiskonRinci } from '../models/harga-diskon-rinci.model';
import { HargaDiskonRinciMapper } from './harga-diskon-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class HargaDiskonRinciRepository {
  constructor(private service: HargaDiskonRinciService) {}

  getHargaDiskonRincis(): Observable<HargaDiskonRinci[]> {
    return this.service.getHargaDiskonRincis().pipe(
      map(dtos => HargaDiskonRinciMapper.toModelList(dtos))
    );
  }
}
