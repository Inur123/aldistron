import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HargaDiskonDto } from '../models/harga-diskon.dto';

@Injectable({
  providedIn: 'root'
})
export class HargaDiskonService {
  private readonly endpoint = 'harga-diskon';

  constructor(private http: HttpClient) {}

  getHargaDiskons(): Observable<HargaDiskonDto[]> {
    return this.http.get<HargaDiskonDto[]>("https://api.aldistron.com/harga-diskon");
  }
}
