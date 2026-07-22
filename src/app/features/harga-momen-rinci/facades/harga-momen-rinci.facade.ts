import { Injectable } from '@angular/core';
import { HargaMomenRinciRepository } from '../repositories/harga-momen-rinci.repository';
import { HargaMomenRinciStore } from './harga-momen-rinci.store';
import { HargaMomenRinci } from '../models/harga-momen-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class HargaMomenRinciFacade {
  constructor(
    private repository: HargaMomenRinciRepository,
    private store: HargaMomenRinciStore
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
    this.repository.getHargaMomenRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HargaMomenRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
