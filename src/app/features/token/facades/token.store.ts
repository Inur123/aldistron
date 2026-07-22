import { Injectable, signal } from '@angular/core';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class TokenStore {
  readonly items = signal<Token[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Token | null>(null);

  setItems(items: Token[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Token | null): void {
    this.selectedItem.set(item);
  }
}
