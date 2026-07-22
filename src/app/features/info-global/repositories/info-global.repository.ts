import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { InfoGlobalService } from '../services/info-global.service';
import { InfoGlobal } from '../models/info-global.model';
import { InfoGlobalMapper } from './info-global.mapper';

@Injectable({
  providedIn: 'root'
})
export class InfoGlobalRepository {
  constructor(private service: InfoGlobalService) {}

  getInfoGlobals(): Observable<InfoGlobal[]> {
    return this.service.getInfoGlobals().pipe(
      map(dtos => InfoGlobalMapper.toModelList(dtos))
    );
  }
}
