import { Injectable, signal } from '@angular/core';
import { UserdataRinci } from '../models/userdata-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataRinciStore {
  readonly items = signal<UserdataRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<UserdataRinci | null>(null);

  setItems(items: UserdataRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: UserdataRinci | null): void {
    this.selectedItem.set(item);
  }
}
