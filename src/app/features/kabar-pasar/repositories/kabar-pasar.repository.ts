import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { KabarPasarService } from '../services/kabar-pasar.service';
import { KabarPasar } from '../models/kabar-pasar.model';
import { KabarPasarMapper } from './kabar-pasar.mapper';

@Injectable({
  providedIn: 'root'
})
export class KabarPasarRepository {
  constructor(private service: KabarPasarService) {}

  getKabarPasars(): Observable<KabarPasar[]> {
    return this.service.getKabarPasars().pipe(
      map(dtos => KabarPasarMapper.toModelList(dtos))
    );
  }
}
