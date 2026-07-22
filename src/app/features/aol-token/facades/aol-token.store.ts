import { Injectable, signal } from '@angular/core';
import { AolToken } from '../models/aol-token.model';

@Injectable({
  providedIn: 'root'
})
export class AolTokenStore {
  readonly aolTokens = signal<AolToken[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedAolToken = signal<AolToken | null>(null);

  setAolTokens(aolTokens: AolToken[]): void {
    this.aolTokens.set(aolTokens);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedAolToken(aolToken: AolToken | null): void {
    this.selectedAolToken.set(aolToken);
  }
}
