import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PelangganRequestService } from '../services/pelanggan-request.service';
import { PelangganRequest } from '../models/pelanggan-request.model';
import { PelangganRequestMapper } from './pelanggan-request.mapper';

@Injectable({
  providedIn: 'root'
})
export class PelangganRequestRepository {
  constructor(private service: PelangganRequestService) {}

  getRequests(): Observable<PelangganRequest[]> {
    return this.service.getRequests().pipe(
      map(dtos => PelangganRequestMapper.toModelList(dtos))
    );
  }
}
