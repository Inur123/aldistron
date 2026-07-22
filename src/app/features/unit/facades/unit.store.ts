import { Injectable, signal } from '@angular/core';
import { Unit } from '../models/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitStore {
  readonly items = signal<Unit[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Unit | null>(null);

  setItems(items: Unit[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Unit | null): void {
    this.selectedItem.set(item);
  }
}
