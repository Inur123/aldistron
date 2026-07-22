import { Injectable } from '@angular/core';
import { PiutangMomenRepository } from '../repositories/piutang-momen.repository';
import { PiutangMomenStore } from './piutang-momen.store';
import { PiutangMomen } from '../models/piutang-momen.model';

@Injectable({
  providedIn: 'root'
})
export class PiutangMomenFacade {
  constructor(
    private repository: PiutangMomenRepository,
    private store: PiutangMomenStore
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
    this.repository.getPiutangMomens().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: PiutangMomen | null): void {
    this.store.setSelectedItem(item);
  }
}
