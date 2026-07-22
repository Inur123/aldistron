import { Injectable } from '@angular/core';
import { HargaPromoRinciRepository } from '../repositories/harga-promo-rinci.repository';
import { HargaPromoRinciStore } from './harga-promo-rinci.store';
import { HargaPromoRinci } from '../models/harga-promo-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class HargaPromoRinciFacade {
  constructor(
    private repository: HargaPromoRinciRepository,
    private store: HargaPromoRinciStore
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
    this.repository.getHargaPromoRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HargaPromoRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
