import { Injectable, signal } from '@angular/core';
import { UserdataTarget } from '../models/userdata-target.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataTargetStore {
  readonly items = signal<UserdataTarget[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<UserdataTarget | null>(null);

  setItems(items: UserdataTarget[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: UserdataTarget | null): void {
    this.selectedItem.set(item);
  }
}
