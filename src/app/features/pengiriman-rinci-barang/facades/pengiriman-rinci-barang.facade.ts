import { Injectable } from '@angular/core';
import { PengirimanRinciBarangRepository } from '../repositories/pengiriman-rinci-barang.repository';
import { PengirimanRinciBarangStore } from './pengiriman-rinci-barang.store';
import { PengirimanRinciBarang } from '../models/pengiriman-rinci-barang.model';

@Injectable({
  providedIn: 'root'
})
export class PengirimanRinciBarangFacade {
  constructor(
    private repository: PengirimanRinciBarangRepository,
    private store: PengirimanRinciBarangStore
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
    this.repository.getPengirimanRinciBarangs().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: PengirimanRinciBarang | null): void {
    this.store.setSelectedItem(item);
  }
}
