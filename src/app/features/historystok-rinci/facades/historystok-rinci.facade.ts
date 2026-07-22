import { Injectable } from '@angular/core';
import { HistorystokRinciRepository } from '../repositories/historystok-rinci.repository';
import { HistorystokRinciStore } from './historystok-rinci.store';
import { HistorystokRinci } from '../models/historystok-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class HistorystokRinciFacade {
  constructor(
    private repository: HistorystokRinciRepository,
    private store: HistorystokRinciStore
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
    this.repository.getHistorystokRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HistorystokRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
