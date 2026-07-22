import { Injectable } from '@angular/core';
import { HistorystokRepository } from '../repositories/historystok.repository';
import { HistorystokStore } from './historystok.store';
import { Historystok } from '../models/historystok.model';

@Injectable({
  providedIn: 'root'
})
export class HistorystokFacade {
  constructor(
    private repository: HistorystokRepository,
    private store: HistorystokStore
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
    this.repository.getHistorystoks().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Historystok | null): void {
    this.store.setSelectedItem(item);
  }
}
