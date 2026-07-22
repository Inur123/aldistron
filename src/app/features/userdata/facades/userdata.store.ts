import { Injectable, signal } from '@angular/core';
import { Userdata } from '../models/userdata.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataStore {
  readonly items = signal<Userdata[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Userdata | null>(null);

  setItems(items: Userdata[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Userdata | null): void {
    this.selectedItem.set(item);
  }
}
