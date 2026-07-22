import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KunjunganSetorDto } from '../models/kunjungan-setor.dto';

@Injectable({
  providedIn: 'root'
})
export class KunjunganSetorService {
  private readonly endpoint = 'kunjungan-setor';

  constructor(private http: HttpClient) {}

  getKunjunganSetors(): Observable<KunjunganSetorDto[]> {
    return this.http.get<KunjunganSetorDto[]>("https://api.aldistron.com/kunjungan-setor");
  }
}
