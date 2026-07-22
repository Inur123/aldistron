import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProvinceDto } from '../models/province.dto';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  private readonly endpoint = 'province';

  constructor(private http: HttpClient) {}

  getProvinces(): Observable<ProvinceDto[]> {
    return this.http.get<ProvinceDto[]>("https://api.aldistron.com/province");
  }
}
