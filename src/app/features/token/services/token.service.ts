import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenDto } from '../models/token.dto';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly endpoint = 'token';

  constructor(private http: HttpClient) {}

  getTokens(): Observable<TokenDto[]> {
    return this.http.get<TokenDto[]>("https://api.aldistron.com/token");
  }
}
