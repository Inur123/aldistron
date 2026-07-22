import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RuteKunjungRinciDto } from '../models/rute-kunjung-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class RuteKunjungRinciService {
  private readonly endpoint = 'rute-kunjung-rinci';

  constructor(private http: HttpClient) {}

  getRuteKunjungRincis(): Observable<RuteKunjungRinciDto[]> {
    return this.http.get<RuteKunjungRinciDto[]>("https://api.aldistron.com/rute-kunjung-rinci");
  }
}
