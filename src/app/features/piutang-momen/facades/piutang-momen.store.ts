import { Injectable, signal } from '@angular/core';
import { PiutangMomen } from '../models/piutang-momen.model';

@Injectable({
  providedIn: 'root'
})
export class PiutangMomenStore {
  readonly items = signal<PiutangMomen[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<PiutangMomen | null>(null);

  setItems(items: PiutangMomen[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: PiutangMomen | null): void {
    this.selectedItem.set(item);
  }
}
