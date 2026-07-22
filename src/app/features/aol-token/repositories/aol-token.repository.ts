import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AolTokenService } from '../services/aol-token.service';
import { AolToken } from '../models/aol-token.model';
import { AolTokenMapper } from './aol-token.mapper';

@Injectable({
  providedIn: 'root'
})
export class AolTokenRepository {
  constructor(private service: AolTokenService) {}

  getAolTokens(): Observable<AolToken[]> {
    return this.service.getAolTokens().pipe(
      map(dtos => AolTokenMapper.toModelList(dtos))
    );
  }
}
