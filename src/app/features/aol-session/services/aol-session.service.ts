import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AolSessionDto } from '../models/aol-session.dto';

@Injectable({
  providedIn: 'root'
})
export class AolSessionService {
  private readonly endpoint = 'aol-session';

  constructor(private http: HttpClient) {}

  getAolSessions(): Observable<AolSessionDto[]> {
    return this.http.get<AolSessionDto[]>(`https://api.aldistron.com/${this.endpoint}`);
  }
}
