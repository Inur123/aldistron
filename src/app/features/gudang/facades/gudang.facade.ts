import { Injectable } from '@angular/core';
import { GudangRepository } from '../repositories/gudang.repository';
import { GudangStore } from './gudang.store';
import { Gudang } from '../models/gudang.model';

@Injectable({
  providedIn: 'root'
})
export class GudangFacade {
  constructor(
    private repository: GudangRepository,
    private store: GudangStore
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
    this.repository.getGudangs().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Gudang | null): void {
    this.store.setSelectedItem(item);
  }
}
