import { Injectable, signal } from '@angular/core';
import { UserdataTargetRinci } from '../models/userdata-target-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataTargetRinciStore {
  readonly items = signal<UserdataTargetRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<UserdataTargetRinci | null>(null);

  setItems(items: UserdataTargetRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: UserdataTargetRinci | null): void {
    this.selectedItem.set(item);
  }
}
