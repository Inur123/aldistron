import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SiteLogDto } from '../models/site-log.dto';

@Injectable({
  providedIn: 'root'
})
export class SiteLogService {
  private readonly endpoint = 'site-log';

  constructor(private http: HttpClient) {}

  getSiteLogs(): Observable<SiteLogDto[]> {
    return this.http.get<SiteLogDto[]>("${environment.apiUrl}/site-log");
  }
}
