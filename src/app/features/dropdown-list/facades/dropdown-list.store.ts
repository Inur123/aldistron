import { Injectable, signal } from '@angular/core';
import { DropdownList } from '../models/dropdown-list.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownListStore {
  readonly items = signal<DropdownList[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<DropdownList | null>(null);

  setItems(items: DropdownList[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: DropdownList | null): void {
    this.selectedItem.set(item);
  }
}
