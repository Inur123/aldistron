import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KunjunganJualDto } from '../models/kunjungan-jual.dto';

@Injectable({
  providedIn: 'root'
})
export class KunjunganJualService {
  private readonly endpoint = 'kunjungan-jual';

  constructor(private http: HttpClient) {}

  getKunjunganJuals(): Observable<KunjunganJualDto[]> {
    return this.http.get<KunjunganJualDto[]>("https://api.aldistron.com/kunjungan-jual");
  }
}
