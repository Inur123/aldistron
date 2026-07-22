import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AolGlAkunService } from '../services/aol-gl-akun.service';
import { AolGlAkun } from '../models/aol-gl-akun.model';
import { AolGlAkunMapper } from './aol-gl-akun.mapper';

@Injectable({
  providedIn: 'root'
})
export class AolGlAkunRepository {
  constructor(private service: AolGlAkunService) {}

  getAolGlAkuns(): Observable<AolGlAkun[]> {
    return this.service.getAolGlAkuns().pipe(
      map(dtos => AolGlAkunMapper.toModelList(dtos))
    );
  }
}
