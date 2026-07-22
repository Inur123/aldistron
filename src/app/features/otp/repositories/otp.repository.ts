import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { OtpService } from '../services/otp.service';
import { Otp } from '../models/otp.model';
import { OtpMapper } from './otp.mapper';

@Injectable({
  providedIn: 'root'
})
export class OtpRepository {
  constructor(private service: OtpService) {}

  getOtps(): Observable<Otp[]> {
    return this.service.getOtps().pipe(
      map(dtos => OtpMapper.toModelList(dtos))
    );
  }
}
