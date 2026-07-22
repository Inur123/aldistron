import { Injectable } from '@angular/core';
import { PengaturanRepository } from '../repositories/pengaturan.repository';
import { PengaturanStore } from './pengaturan.store';
import { Pengaturan } from '../models/pengaturan.model';

@Injectable({
  providedIn: 'root'
})
export class PengaturanFacade {
  constructor(
    private repository: PengaturanRepository,
    private store: PengaturanStore
  ) {}

  get pengaturans() {
    return this.store.pengaturans;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedPengaturan() {
    return this.store.selectedPengaturan;
  }

  loadPengaturans(): void {
    this.store.setLoading(true);
    this.repository.getPengaturans().subscribe({
      next: (data) => {
        this.store.setPengaturans(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectPengaturan(pengaturan: Pengaturan | null): void {
    this.store.setSelectedPengaturan(pengaturan);
  }
}
