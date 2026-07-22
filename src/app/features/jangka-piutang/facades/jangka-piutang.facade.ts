import { Injectable } from '@angular/core';
import { JangkaPiutangRepository } from '../repositories/jangka-piutang.repository';
import { JangkaPiutangStore } from './jangka-piutang.store';
import { JangkaPiutang } from '../models/jangka-piutang.model';

@Injectable({
  providedIn: 'root'
})
export class JangkaPiutangFacade {
  constructor(
    private repository: JangkaPiutangRepository,
    private store: JangkaPiutangStore
  ) {}

  get jangkaPiutangs() {
    return this.store.jangkaPiutangs;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedJangkaPiutang() {
    return this.store.selectedJangkaPiutang;
  }

  loadJangkaPiutangs(): void {
    this.store.setLoading(true);
    this.repository.getJangkaPiutangs().subscribe({
      next: (data) => {
        this.store.setJangkaPiutangs(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectJangkaPiutang(jangkaPiutang: JangkaPiutang | null): void {
    this.store.setSelectedJangkaPiutang(jangkaPiutang);
  }
}
