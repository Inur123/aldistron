import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OtpDto } from '../models/otp.dto';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private readonly endpoint = 'otp';

  constructor(private http: HttpClient) {}

  getOtps(): Observable<OtpDto[]> {
    return this.http.get<OtpDto[]>("${environment.apiUrl}/otp");
  }
}
