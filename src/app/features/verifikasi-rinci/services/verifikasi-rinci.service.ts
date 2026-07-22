import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerifikasiRinciDto } from '../models/verifikasi-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class VerifikasiRinciService {
  private readonly endpoint = 'verifikasi-rinci';

  constructor(private http: HttpClient) {}

  getVerifikasiRincis(): Observable<VerifikasiRinciDto[]> {
    return this.http.get<VerifikasiRinciDto[]>(`https://api.aldistron.com/${this.endpoint}`);
  }
}
