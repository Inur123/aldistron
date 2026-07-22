import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HargaMomenRinciDto } from '../models/harga-momen-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class HargaMomenRinciService {
  private readonly endpoint = 'harga-momen-rinci';

  constructor(private http: HttpClient) {}

  getHargaMomenRincis(): Observable<HargaMomenRinciDto[]> {
    return this.http.get<HargaMomenRinciDto[]>("https://api.aldistron.com/harga-momen-rinci");
  }
}
