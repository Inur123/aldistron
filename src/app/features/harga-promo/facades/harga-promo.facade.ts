import { Injectable } from '@angular/core';
import { HargaPromoRepository } from '../repositories/harga-promo.repository';
import { HargaPromoStore } from './harga-promo.store';
import { HargaPromo } from '../models/harga-promo.model';

@Injectable({
  providedIn: 'root'
})
export class HargaPromoFacade {
  constructor(
    private repository: HargaPromoRepository,
    private store: HargaPromoStore
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
    this.repository.getHargaPromos().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HargaPromo | null): void {
    this.store.setSelectedItem(item);
  }
}
