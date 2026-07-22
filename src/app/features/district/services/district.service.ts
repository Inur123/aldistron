import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DistrictDto } from '../models/district.dto';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  private readonly endpoint = 'district';

  constructor(private http: HttpClient) {}

  getDistricts(): Observable<DistrictDto[]> {
    return this.http.get<DistrictDto[]>("https://api.aldistron.com/district");
  }
}
