import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KunjunganTagihNoRuteDto } from '../models/kunjungan-tagih-no-rute.dto';

@Injectable({
  providedIn: 'root'
})
export class KunjunganTagihNoRuteService {
  private readonly endpoint = 'kunjungan-tagih-no-rute';

  constructor(private http: HttpClient) {}

  getKunjunganTagihNoRutes(): Observable<KunjunganTagihNoRuteDto[]> {
    return this.http.get<KunjunganTagihNoRuteDto[]>("${environment.apiUrl}/kunjungan-tagih-no-rute");
  }
}
