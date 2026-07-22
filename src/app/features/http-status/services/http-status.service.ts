import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpStatusDto } from '../models/http-status.dto';

@Injectable({
  providedIn: 'root'
})
export class HttpStatusService {
  private readonly endpoint = 'http-status';

  constructor(private http: HttpClient) {}

  getHttpStatuss(): Observable<HttpStatusDto[]> {
    return this.http.get<HttpStatusDto[]>("https://api.aldistron.com/http-status");
  }
}
