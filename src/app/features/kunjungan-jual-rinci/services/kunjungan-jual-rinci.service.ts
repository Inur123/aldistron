import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KunjunganJualRinciDto } from '../models/kunjungan-jual-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class KunjunganJualRinciService {
  private readonly endpoint = 'kunjungan-jual-rinci';

  constructor(private http: HttpClient) {}

  getKunjunganJualRincis(): Observable<KunjunganJualRinciDto[]> {
    return this.http.get<KunjunganJualRinciDto[]>("https://api.aldistron.com/kunjungan-jual-rinci");
  }
}
