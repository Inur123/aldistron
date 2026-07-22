import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpStatusService } from '../services/http-status.service';
import { HttpStatus } from '../models/http-status.model';
import { HttpStatusMapper } from './http-status.mapper';

@Injectable({
  providedIn: 'root'
})
export class HttpStatusRepository {
  constructor(private service: HttpStatusService) {}

  getHttpStatuss(): Observable<HttpStatus[]> {
    return this.service.getHttpStatuss().pipe(
      map(dtos => HttpStatusMapper.toModelList(dtos))
    );
  }
}
