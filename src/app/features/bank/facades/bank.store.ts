import { Injectable, signal } from '@angular/core';
import { Bank } from '../models/bank.model';

@Injectable({
  providedIn: 'root'
})
export class BankStore {
  readonly items = signal<Bank[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Bank | null>(null);

  setItems(items: Bank[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Bank | null): void {
    this.selectedItem.set(item);
  }
}
