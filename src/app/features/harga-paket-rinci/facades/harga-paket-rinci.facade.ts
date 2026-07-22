import { Injectable } from '@angular/core';
import { HargaPaketRinciRepository } from '../repositories/harga-paket-rinci.repository';
import { HargaPaketRinciStore } from './harga-paket-rinci.store';
import { HargaPaketRinci } from '../models/harga-paket-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class HargaPaketRinciFacade {
  constructor(
    private repository: HargaPaketRinciRepository,
    private store: HargaPaketRinciStore
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
    this.repository.getHargaPaketRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HargaPaketRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
