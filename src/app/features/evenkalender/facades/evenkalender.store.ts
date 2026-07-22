import { Injectable, signal } from '@angular/core';
import { Evenkalender } from '../models/evenkalender.model';

@Injectable({
  providedIn: 'root'
})
export class EvenkalenderStore {
  readonly items = signal<Evenkalender[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Evenkalender | null>(null);

  setItems(items: Evenkalender[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Evenkalender | null): void {
    this.selectedItem.set(item);
  }
}
