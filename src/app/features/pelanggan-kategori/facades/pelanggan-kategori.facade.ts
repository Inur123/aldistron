import { Injectable } from '@angular/core';
import { PelangganKategoriRepository } from '../repositories/pelanggan-kategori.repository';
import { PelangganKategoriStore } from './pelanggan-kategori.store';
import { PelangganKategori } from '../models/pelanggan-kategori.model';

@Injectable({
  providedIn: 'root'
})
export class PelangganKategoriFacade {
  constructor(
    private repository: PelangganKategoriRepository,
    private store: PelangganKategoriStore
  ) {}

  get items() {
    return this.store.items;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedItem() {
    return this.store.selectedItem;
  }

  loadItems(): void {
    this.store.setLoading(true);
    this.repository.getPelangganKategoris().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: PelangganKategori | null): void {
    this.store.setSelectedItem(item);
  }
}
