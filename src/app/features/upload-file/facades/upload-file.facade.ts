import { Injectable } from '@angular/core';
import { UploadFileRepository } from '../repositories/upload-file.repository';
import { UploadFileStore } from './upload-file.store';
import { UploadFile } from '../models/upload-file.model';

@Injectable({
  providedIn: 'root'
})
export class UploadFileFacade {
  constructor(
    private repository: UploadFileRepository,
    private store: UploadFileStore
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
    this.repository.getUploadFiles().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: UploadFile | null): void {
    this.store.setSelectedItem(item);
  }
}
