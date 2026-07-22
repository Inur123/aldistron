import { Injectable, signal } from '@angular/core';
import { EvenkalenderRinci } from '../models/evenkalender-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class EvenkalenderRinciStore {
  readonly items = signal<EvenkalenderRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<EvenkalenderRinci | null>(null);

  setItems(items: EvenkalenderRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: EvenkalenderRinci | null): void {
    this.selectedItem.set(item);
  }
}
