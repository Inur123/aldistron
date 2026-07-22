import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KunjunganDto } from '../models/kunjungan.dto';

@Injectable({
  providedIn: 'root'
})
export class KunjunganService {
  private readonly endpoint = 'kunjungan';

  constructor(private http: HttpClient) {}

  getKunjungans(): Observable<KunjunganDto[]> {
    return this.http.get<KunjunganDto[]>("${environment.apiUrl}/kunjungan");
  }
}
