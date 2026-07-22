import { Injectable, signal } from '@angular/core';
import { DropdownCustom } from '../models/dropdown-custom.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownCustomStore {
  readonly items = signal<DropdownCustom[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<DropdownCustom | null>(null);

  setItems(items: DropdownCustom[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: DropdownCustom | null): void {
    this.selectedItem.set(item);
  }
}
