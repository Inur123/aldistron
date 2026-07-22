import { Injectable, signal } from '@angular/core';
import { InfoKhusus } from '../models/info-khusus.model';

@Injectable({
  providedIn: 'root'
})
export class InfoKhususStore {
  readonly items = signal<InfoKhusus[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<InfoKhusus | null>(null);

  setItems(items: InfoKhusus[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: InfoKhusus | null): void {
    this.selectedItem.set(item);
  }
}
