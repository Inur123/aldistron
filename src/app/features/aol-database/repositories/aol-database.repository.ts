import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AolDatabaseService } from '../services/aol-database.service';
import { AolDatabase } from '../models/aol-database.model';
import { AolDatabaseMapper } from './aol-database.mapper';

@Injectable({
  providedIn: 'root'
})
export class AolDatabaseRepository {
  constructor(private aolDatabaseService: AolDatabaseService) {}

  getDatabases(): Observable<AolDatabase[]> {
    return this.aolDatabaseService.getDatabases().pipe(
      map(dtos => AolDatabaseMapper.toModelList(dtos))
    );
  }
}
