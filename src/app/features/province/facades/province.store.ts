import { Injectable, signal } from '@angular/core';
import { Province } from '../models/province.model';

@Injectable({
  providedIn: 'root'
})
export class ProvinceStore {
  readonly items = signal<Province[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Province | null>(null);

  setItems(items: Province[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Province | null): void {
    this.selectedItem.set(item);
  }
}
