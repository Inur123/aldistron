import { Injectable, signal } from '@angular/core';
import { Kabarpasarchat } from '../models/kabarpasarchat.model';

@Injectable({
  providedIn: 'root'
})
export class KabarpasarchatStore {
  readonly items = signal<Kabarpasarchat[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Kabarpasarchat | null>(null);

  setItems(items: Kabarpasarchat[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Kabarpasarchat | null): void {
    this.selectedItem.set(item);
  }
}
