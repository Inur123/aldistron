import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AolSessionService } from '../services/aol-session.service';
import { AolSession } from '../models/aol-session.model';
import { AolSessionMapper } from './aol-session.mapper';

@Injectable({
  providedIn: 'root'
})
export class AolSessionRepository {
  constructor(private service: AolSessionService) {}

  getAolSessions(): Observable<AolSession[]> {
    return this.service.getAolSessions().pipe(
      map(dtos => AolSessionMapper.toModelList(dtos))
    );
  }
}
