import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RuteKunjungDto } from '../models/rute-kunjung.dto';

@Injectable({
  providedIn: 'root'
})
export class RuteKunjungService {
  private readonly endpoint = 'rute-kunjung';

  constructor(private http: HttpClient) {}

  getRuteKunjungs(): Observable<RuteKunjungDto[]> {
    return this.http.get<RuteKunjungDto[]>("https://api.aldistron.com/rute-kunjung");
  }
}
