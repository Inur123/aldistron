import { Injectable, signal } from '@angular/core';
import { Sysadmin } from '../models/sysadmin.model';

@Injectable({
  providedIn: 'root'
})
export class SysadminStore {
  readonly items = signal<Sysadmin[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Sysadmin | null>(null);

  setItems(items: Sysadmin[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Sysadmin | null): void {
    this.selectedItem.set(item);
  }
}
