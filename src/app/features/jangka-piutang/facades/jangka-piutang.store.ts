import { Injectable, signal } from '@angular/core';
import { JangkaPiutang } from '../models/jangka-piutang.model';

@Injectable({
  providedIn: 'root'
})
export class JangkaPiutangStore {
  readonly jangkaPiutangs = signal<JangkaPiutang[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedJangkaPiutang = signal<JangkaPiutang | null>(null);

  setJangkaPiutangs(jangkaPiutangs: JangkaPiutang[]): void {
    this.jangkaPiutangs.set(jangkaPiutangs);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedJangkaPiutang(jangkaPiutang: JangkaPiutang | null): void {
    this.selectedJangkaPiutang.set(jangkaPiutang);
  }
}
