import { Injectable } from '@angular/core';
import { VerifikasiRepository } from '../repositories/verifikasi.repository';
import { VerifikasiStore } from './verifikasi.store';
import { Verifikasi } from '../models/verifikasi.model';

@Injectable({
  providedIn: 'root'
})
export class VerifikasiFacade {
  constructor(
    private repository: VerifikasiRepository,
    private store: VerifikasiStore
  ) {}

  get verifikasis() {
    return this.store.verifikasis;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedVerifikasi() {
    return this.store.selectedVerifikasi;
  }

  loadVerifikasis(): void {
    this.store.setLoading(true);
    this.repository.getVerifikasis().subscribe({
      next: (data) => {
        this.store.setVerifikasis(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectVerifikasi(verifikasi: Verifikasi | null): void {
    this.store.setSelectedVerifikasi(verifikasi);
  }
}
