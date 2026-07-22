import { Injectable } from '@angular/core';
import { BankRepository } from '../repositories/bank.repository';
import { BankStore } from './bank.store';
import { Bank } from '../models/bank.model';

@Injectable({
  providedIn: 'root'
})
export class BankFacade {
  constructor(
    private repository: BankRepository,
    private store: BankStore
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
    this.repository.getBanks().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Bank | null): void {
    this.store.setSelectedItem(item);
  }
}
