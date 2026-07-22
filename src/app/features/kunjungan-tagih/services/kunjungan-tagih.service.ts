import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KunjunganTagihDto } from '../models/kunjungan-tagih.dto';

@Injectable({
  providedIn: 'root'
})
export class KunjunganTagihService {
  private readonly endpoint = 'kunjungan-tagih';

  constructor(private http: HttpClient) {}

  getKunjunganTagihs(): Observable<KunjunganTagihDto[]> {
    return this.http.get<KunjunganTagihDto[]>("https://api.aldistron.com/kunjungan-tagih");
  }
}
