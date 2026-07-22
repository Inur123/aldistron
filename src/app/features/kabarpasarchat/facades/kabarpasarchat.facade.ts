import { Injectable } from '@angular/core';
import { KabarpasarchatRepository } from '../repositories/kabarpasarchat.repository';
import { KabarpasarchatStore } from './kabarpasarchat.store';
import { Kabarpasarchat } from '../models/kabarpasarchat.model';

@Injectable({
  providedIn: 'root'
})
export class KabarpasarchatFacade {
  constructor(
    private repository: KabarpasarchatRepository,
    private store: KabarpasarchatStore
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
    this.repository.getKabarpasarchats().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Kabarpasarchat | null): void {
    this.store.setSelectedItem(item);
  }
}
