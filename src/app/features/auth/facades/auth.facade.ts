import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthStore } from './auth.store';
import { RegisterRequestDto, LoginRequestDto, AuthResponseDto } from '../models/auth.dto';
import { UseradminMapper } from '../../useradmin/repositories/useradmin.mapper';
import { UserdataMapper } from '../../userdata/repositories/userdata.mapper';
import { TokenMapper } from '../../token/repositories/token.mapper';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  constructor(
    private service: AuthService,
    private store: AuthStore
  ) {}

  get useradmin() {
    return this.store.currentUseradmin;
  }

  get userdata() {
    return this.store.currentUserdata;
  }

  get token() {
    return this.store.currentToken;
  }

  get isAuthenticated() {
    return this.store.isAuthenticated;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get error() {
    return this.store.error;
  }

  register(payload: RegisterRequestDto): Observable<AuthResponseDto> {
    this.store.setLoading(true);
    return this.service.register(payload).pipe(
      tap({
        next: (res) => {
          if (res.status && res.useradmin && res.userdata && res.token) {
            const useradmin = UseradminMapper.toModel(res.useradmin);
            const userdata = UserdataMapper.toModel(res.userdata);
            const token = TokenMapper.toModel(res.token);
            this.store.setSession(useradmin, userdata, token);
          }
          this.store.setLoading(false);
        },
        error: (err) => {
          this.store.setError(err.message || 'Registrasi gagal');
          this.store.setLoading(false);
        }
      })
    );
  }

  login(payload: LoginRequestDto): Observable<AuthResponseDto> {
    this.store.setLoading(true);
    return this.service.login(payload).pipe(
      tap({
        next: (res) => {
          if (res.status && res.useradmin && res.userdata && res.token) {
            const useradmin = UseradminMapper.toModel(res.useradmin);
            const userdata = UserdataMapper.toModel(res.userdata);
            const token = TokenMapper.toModel(res.token);
            this.store.setSession(useradmin, userdata, token);
          }
          this.store.setLoading(false);
        },
        error: (err) => {
          this.store.setError(err.message || 'Login gagal');
          this.store.setLoading(false);
        }
      })
    );
  }

  logout(): void {
    this.service.logout().subscribe(() => {
      this.store.clearSession();
    });
  }
}
