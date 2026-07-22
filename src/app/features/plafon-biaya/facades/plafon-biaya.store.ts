import { Injectable, signal } from '@angular/core';
import { PlafonBiaya } from '../models/plafon-biaya.model';

@Injectable({
  providedIn: 'root'
})
export class PlafonBiayaStore {
  readonly items = signal<PlafonBiaya[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<PlafonBiaya | null>(null);

  setItems(items: PlafonBiaya[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: PlafonBiaya | null): void {
    this.selectedItem.set(item);
  }
}
