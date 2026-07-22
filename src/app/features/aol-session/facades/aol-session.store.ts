import { Injectable, signal } from '@angular/core';
import { AolSession } from '../models/aol-session.model';

@Injectable({
  providedIn: 'root'
})
export class AolSessionStore {
  readonly aolSessions = signal<AolSession[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedAolSession = signal<AolSession | null>(null);

  setAolSessions(aolSessions: AolSession[]): void {
    this.aolSessions.set(aolSessions);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedAolSession(aolSession: AolSession | null): void {
    this.selectedAolSession.set(aolSession);
  }
}
