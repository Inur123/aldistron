import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HargaMomenDto } from '../models/harga-momen.dto';

@Injectable({
  providedIn: 'root'
})
export class HargaMomenService {
  private readonly endpoint = 'harga-momen';

  constructor(private http: HttpClient) {}

  getHargaMomens(): Observable<HargaMomenDto[]> {
    return this.http.get<HargaMomenDto[]>("https://api.aldistron.com/harga-momen");
  }
}
