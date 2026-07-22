import { Injectable, signal, computed } from '@angular/core';
import { Useradmin } from '../../useradmin/models/useradmin.model';
import { Userdata } from '../../userdata/models/userdata.model';
import { Token } from '../../token/models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthStore {
  readonly currentUseradmin = signal<Useradmin | null>(null);
  readonly currentUserdata = signal<Userdata | null>(null);
  readonly currentToken = signal<Token | null>(null);
  readonly isAuthenticated = computed(() => !!this.currentToken());
  readonly isLoading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  setSession(useradmin: Useradmin, userdata: Userdata, token: Token): void {
    this.currentUseradmin.set(useradmin);
    this.currentUserdata.set(userdata);
    this.currentToken.set(token);
    this.error.set(null);
  }

  clearSession(): void {
    this.currentUseradmin.set(null);
    this.currentUserdata.set(null);
    this.currentToken.set(null);
    this.error.set(null);
  }

  setLoading(loading: boolean): void {
    this.isLoading.set(loading);
  }

  setError(err: string | null): void {
    this.error.set(err);
  }
}
