import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegencyDto } from '../models/regency.dto';

@Injectable({
  providedIn: 'root'
})
export class RegencyService {
  private readonly endpoint = 'regency';

  constructor(private http: HttpClient) {}

  getRegencys(): Observable<RegencyDto[]> {
    return this.http.get<RegencyDto[]>("https://api.aldistron.com/regency");
  }
}
