import { Injectable } from '@angular/core';
import { PelangganPersonalRepository } from '../repositories/pelanggan-personal.repository';
import { PelangganPersonalStore } from './pelanggan-personal.store';
import { PelangganPersonal } from '../models/pelanggan-personal.model';

@Injectable({
  providedIn: 'root'
})
export class PelangganPersonalFacade {
  constructor(
    private repository: PelangganPersonalRepository,
    private store: PelangganPersonalStore
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
    this.repository.getPelangganPersonals().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: PelangganPersonal | null): void {
    this.store.setSelectedItem(item);
  }
}
