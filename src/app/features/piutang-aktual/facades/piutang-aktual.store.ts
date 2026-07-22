import { Injectable, signal } from '@angular/core';
import { PiutangAktual } from '../models/piutang-aktual.model';

@Injectable({
  providedIn: 'root'
})
export class PiutangAktualStore {
  readonly items = signal<PiutangAktual[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<PiutangAktual | null>(null);

  setItems(items: PiutangAktual[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: PiutangAktual | null): void {
    this.selectedItem.set(item);
  }
}
