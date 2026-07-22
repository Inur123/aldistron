import { Injectable } from '@angular/core';
import { AolSessionRepository } from '../repositories/aol-session.repository';
import { AolSessionStore } from './aol-session.store';
import { AolSession } from '../models/aol-session.model';

@Injectable({
  providedIn: 'root'
})
export class AolSessionFacade {
  constructor(
    private repository: AolSessionRepository,
    private store: AolSessionStore
  ) {}

  get aolSessions() {
    return this.store.aolSessions;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedAolSession() {
    return this.store.selectedAolSession;
  }

  loadAolSessions(): void {
    this.store.setLoading(true);
    this.repository.getAolSessions().subscribe({
      next: (data) => {
        this.store.setAolSessions(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectAolSession(aolSession: AolSession | null): void {
    this.store.setSelectedAolSession(aolSession);
  }
}
