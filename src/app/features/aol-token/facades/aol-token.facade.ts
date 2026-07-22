import { Injectable } from '@angular/core';
import { AolTokenRepository } from '../repositories/aol-token.repository';
import { AolTokenStore } from './aol-token.store';
import { AolToken } from '../models/aol-token.model';

@Injectable({
  providedIn: 'root'
})
export class AolTokenFacade {
  constructor(
    private repository: AolTokenRepository,
    private store: AolTokenStore
  ) {}

  get aolTokens() {
    return this.store.aolTokens;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedAolToken() {
    return this.store.selectedAolToken;
  }

  loadAolTokens(): void {
    this.store.setLoading(true);
    this.repository.getAolTokens().subscribe({
      next: (data) => {
        this.store.setAolTokens(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectAolToken(aolToken: AolToken | null): void {
    this.store.setSelectedAolToken(aolToken);
  }
}
