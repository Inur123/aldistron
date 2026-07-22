import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HargaPaketRinciDto } from '../models/harga-paket-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class HargaPaketRinciService {
  private readonly endpoint = 'harga-paket-rinci';

  constructor(private http: HttpClient) {}

  getHargaPaketRincis(): Observable<HargaPaketRinciDto[]> {
    return this.http.get<HargaPaketRinciDto[]>("https://api.aldistron.com/harga-paket-rinci");
  }
}
