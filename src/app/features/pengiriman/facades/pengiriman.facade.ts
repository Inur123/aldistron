import { Injectable } from '@angular/core';
import { PengirimanRepository } from '../repositories/pengiriman.repository';
import { PengirimanStore } from './pengiriman.store';
import { Pengiriman } from '../models/pengiriman.model';

@Injectable({
  providedIn: 'root'
})
export class PengirimanFacade {
  constructor(
    private repository: PengirimanRepository,
    private store: PengirimanStore
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
    this.repository.getPengirimans().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Pengiriman | null): void {
    this.store.setSelectedItem(item);
  }
}
