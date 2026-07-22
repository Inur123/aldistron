import { Injectable } from '@angular/core';
import { HargaPromoProdukRepository } from '../repositories/harga-promo-produk.repository';
import { HargaPromoProdukStore } from './harga-promo-produk.store';
import { HargaPromoProduk } from '../models/harga-promo-produk.model';

@Injectable({
  providedIn: 'root'
})
export class HargaPromoProdukFacade {
  constructor(
    private repository: HargaPromoProdukRepository,
    private store: HargaPromoProdukStore
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
    this.repository.getHargaPromoProduks().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HargaPromoProduk | null): void {
    this.store.setSelectedItem(item);
  }
}
