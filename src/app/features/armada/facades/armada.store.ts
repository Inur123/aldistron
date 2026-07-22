import { Injectable, signal } from '@angular/core';
import { Armada } from '../models/armada.model';

@Injectable({
  providedIn: 'root'
})
export class ArmadaStore {
  readonly items = signal<Armada[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Armada | null>(null);

  setItems(items: Armada[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Armada | null): void {
    this.selectedItem.set(item);
  }
}
