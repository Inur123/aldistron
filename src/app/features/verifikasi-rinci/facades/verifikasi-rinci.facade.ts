import { Injectable } from '@angular/core';
import { VerifikasiRinciRepository } from '../repositories/verifikasi-rinci.repository';
import { VerifikasiRinciStore } from './verifikasi-rinci.store';
import { VerifikasiRinci } from '../models/verifikasi-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class VerifikasiRinciFacade {
  constructor(
    private repository: VerifikasiRinciRepository,
    private store: VerifikasiRinciStore
  ) {}

  get verifikasiRincis() {
    return this.store.verifikasiRincis;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedVerifikasiRinci() {
    return this.store.selectedVerifikasiRinci;
  }

  loadVerifikasiRincis(): void {
    this.store.setLoading(true);
    this.repository.getVerifikasiRincis().subscribe({
      next: (data) => {
        this.store.setVerifikasiRincis(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectVerifikasiRinci(verifikasiRinci: VerifikasiRinci | null): void {
    this.store.setSelectedVerifikasiRinci(verifikasiRinci);
  }
}
