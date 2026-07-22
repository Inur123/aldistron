import { Injectable } from '@angular/core';
import { PelangganPoinRepository } from '../repositories/pelanggan-poin.repository';
import { PelangganPoinStore } from './pelanggan-poin.store';
import { PelangganPoin } from '../models/pelanggan-poin.model';

@Injectable({
  providedIn: 'root'
})
export class PelangganPoinFacade {
  constructor(
    private repository: PelangganPoinRepository,
    private store: PelangganPoinStore
  ) {}

  get poins() {
    return this.store.items;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedItem() {
    return this.store.selectedItem;
  }

  loadPoins(): void {
    this.store.setLoading(true);
    this.repository.getPoins().subscribe({
      next: (data: PelangganPoin[]) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: PelangganPoin | null): void {
    this.store.setSelectedItem(item);
  }
}
