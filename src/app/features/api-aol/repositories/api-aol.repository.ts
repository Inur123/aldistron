import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiAolService } from '../services/api-aol.service';
import { ApiAol } from '../models/api-aol.model';
import { ApiAolMapper } from './api-aol.mapper';

@Injectable({
  providedIn: 'root'
})
export class ApiAolRepository {
  constructor(private service: ApiAolService) {}

  getApiAols(): Observable<ApiAol[]> {
    return this.service.getApiAols().pipe(
      map(dtos => ApiAolMapper.toModelList(dtos))
    );
  }
}
