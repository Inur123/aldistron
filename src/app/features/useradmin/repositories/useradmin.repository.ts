import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UseradminService } from '../services/useradmin.service';
import { Useradmin } from '../models/useradmin.model';
import { UseradminMapper } from './useradmin.mapper';

@Injectable({
  providedIn: 'root'
})
export class UseradminRepository {
  constructor(private service: UseradminService) {}

  getUseradmins(): Observable<Useradmin[]> {
    return this.service.getUseradmins().pipe(
      map(dtos => UseradminMapper.toModelList(dtos))
    );
  }
}
