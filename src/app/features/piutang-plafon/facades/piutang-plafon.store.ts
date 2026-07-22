import { Injectable, signal } from '@angular/core';
import { PiutangPlafon } from '../models/piutang-plafon.model';

@Injectable({
  providedIn: 'root'
})
export class PiutangPlafonStore {
  readonly items = signal<PiutangPlafon[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<PiutangPlafon | null>(null);

  setItems(items: PiutangPlafon[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: PiutangPlafon | null): void {
    this.selectedItem.set(item);
  }
}
