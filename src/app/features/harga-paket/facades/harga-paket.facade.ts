import { Injectable } from '@angular/core';
import { HargaPaketRepository } from '../repositories/harga-paket.repository';
import { HargaPaketStore } from './harga-paket.store';
import { HargaPaket } from '../models/harga-paket.model';

@Injectable({
  providedIn: 'root'
})
export class HargaPaketFacade {
  constructor(
    private repository: HargaPaketRepository,
    private store: HargaPaketStore
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
    this.repository.getHargaPakets().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HargaPaket | null): void {
    this.store.setSelectedItem(item);
  }
}
