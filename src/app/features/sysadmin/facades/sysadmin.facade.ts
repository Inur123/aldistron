import { Injectable } from '@angular/core';
import { SysadminRepository } from '../repositories/sysadmin.repository';
import { SysadminStore } from './sysadmin.store';
import { Sysadmin } from '../models/sysadmin.model';

@Injectable({
  providedIn: 'root'
})
export class SysadminFacade {
  constructor(
    private repository: SysadminRepository,
    private store: SysadminStore
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
    this.repository.getSysadmins().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Sysadmin | null): void {
    this.store.setSelectedItem(item);
  }
}
