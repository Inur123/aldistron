import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HargaDiskonService } from '../services/harga-diskon.service';
import { HargaDiskon } from '../models/harga-diskon.model';
import { HargaDiskonMapper } from './harga-diskon.mapper';

@Injectable({
  providedIn: 'root'
})
export class HargaDiskonRepository {
  constructor(private service: HargaDiskonService) {}

  getHargaDiskons(): Observable<HargaDiskon[]> {
    return this.service.getHargaDiskons().pipe(
      map(dtos => HargaDiskonMapper.toModelList(dtos))
    );
  }
}
