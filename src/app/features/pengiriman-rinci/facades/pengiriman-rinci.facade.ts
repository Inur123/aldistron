import { Injectable } from '@angular/core';
import { PengirimanRinciRepository } from '../repositories/pengiriman-rinci.repository';
import { PengirimanRinciStore } from './pengiriman-rinci.store';
import { PengirimanRinci } from '../models/pengiriman-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class PengirimanRinciFacade {
  constructor(
    private repository: PengirimanRinciRepository,
    private store: PengirimanRinciStore
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
    this.repository.getPengirimanRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: PengirimanRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
