import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TokenService } from '../services/token.service';
import { Token } from '../models/token.model';
import { TokenMapper } from './token.mapper';

@Injectable({
  providedIn: 'root'
})
export class TokenRepository {
  constructor(private service: TokenService) {}

  getTokens(): Observable<Token[]> {
    return this.service.getTokens().pipe(
      map(dtos => TokenMapper.toModelList(dtos))
    );
  }
}
