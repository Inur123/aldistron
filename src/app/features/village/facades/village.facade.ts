import { Injectable } from '@angular/core';
import { VillageRepository } from '../repositories/village.repository';
import { VillageStore } from './village.store';
import { Village } from '../models/village.model';

@Injectable({
  providedIn: 'root'
})
export class VillageFacade {
  constructor(
    private repository: VillageRepository,
    private store: VillageStore
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
    this.repository.getVillages().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Village | null): void {
    this.store.setSelectedItem(item);
  }
}
