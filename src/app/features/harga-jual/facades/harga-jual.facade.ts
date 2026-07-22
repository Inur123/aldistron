import { Injectable } from '@angular/core';
import { HargaJualRepository } from '../repositories/harga-jual.repository';
import { HargaJualStore } from './harga-jual.store';
import { HargaJual } from '../models/harga-jual.model';

@Injectable({
  providedIn: 'root'
})
export class HargaJualFacade {
  constructor(
    private repository: HargaJualRepository,
    private store: HargaJualStore
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
    this.repository.getHargaJuals().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HargaJual | null): void {
    this.store.setSelectedItem(item);
  }
}
