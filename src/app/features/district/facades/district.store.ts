import { Injectable, signal } from '@angular/core';
import { District } from '../models/district.model';

@Injectable({
  providedIn: 'root'
})
export class DistrictStore {
  readonly items = signal<District[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<District | null>(null);

  setItems(items: District[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: District | null): void {
    this.selectedItem.set(item);
  }
}
