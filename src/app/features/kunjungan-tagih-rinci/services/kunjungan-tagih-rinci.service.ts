import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KunjunganTagihRinciDto } from '../models/kunjungan-tagih-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class KunjunganTagihRinciService {
  private readonly endpoint = 'kunjungan-tagih-rinci';

  constructor(private http: HttpClient) {}

  getKunjunganTagihRincis(): Observable<KunjunganTagihRinciDto[]> {
    return this.http.get<KunjunganTagihRinciDto[]>("https://api.aldistron.com/kunjungan-tagih-rinci");
  }
}
