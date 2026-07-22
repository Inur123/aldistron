import { Injectable } from '@angular/core';
import { TokenRepository } from '../repositories/token.repository';
import { TokenStore } from './token.store';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class TokenFacade {
  constructor(
    private repository: TokenRepository,
    private store: TokenStore
  ) {}

  get items() {
    return this.store.items;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedItem() {
    return this.store.selectedItem;
  }

  loadItems(): void {
    this.store.setLoading(true);
    this.repository.getTokens().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Token | null): void {
    this.store.setSelectedItem(item);
  }
}
