import { Injectable } from '@angular/core';
import { PelangganRepository } from '../repositories/pelanggan.repository';
import { PelangganStore } from './pelanggan.store';
import { Pelanggan } from '../models/pelanggan.model';

@Injectable({
  providedIn: 'root'
})
export class PelangganFacade {
  constructor(
    private repository: PelangganRepository,
    private store: PelangganStore
  ) {}

  get pelanggans() {
    return this.store.items;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedPelanggan() {
    return this.store.selectedItem;
  }

  loadPelanggans(): void {
    this.store.setLoading(true);
    this.repository.getPelanggans().subscribe({
      next: (data: Pelanggan[]) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectPelanggan(item: Pelanggan | null): void {
    this.store.setSelectedItem(item);
  }
}
