import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AolTokenDto } from '../models/aol-token.dto';

@Injectable({
  providedIn: 'root'
})
export class AolTokenService {
  private readonly endpoint = 'aol-token';

  constructor(private http: HttpClient) {}

  getAolTokens(): Observable<AolTokenDto[]> {
    return this.http.get<AolTokenDto[]>(`${environment.apiUrl}/${this.endpoint}`);
  }
}
