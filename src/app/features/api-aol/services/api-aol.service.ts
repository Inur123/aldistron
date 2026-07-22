import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiAolDto } from '../models/api-aol.dto';

@Injectable({
  providedIn: 'root'
})
export class ApiAolService {
  private readonly endpoint = 'api-aol';

  constructor(private http: HttpClient) {}

  getApiAols(): Observable<ApiAolDto[]> {
    return this.http.get<ApiAolDto[]>(`https://api.aldistron.com/${this.endpoint}`);
  }
}
