import { Injectable, signal } from '@angular/core';
import { Useradmin } from '../models/useradmin.model';

@Injectable({
  providedIn: 'root'
})
export class UseradminStore {
  readonly items = signal<Useradmin[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Useradmin | null>(null);

  setItems(items: Useradmin[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Useradmin | null): void {
    this.selectedItem.set(item);
  }
}
