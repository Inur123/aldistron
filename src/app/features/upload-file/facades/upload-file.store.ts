import { Injectable, signal } from '@angular/core';
import { UploadFile } from '../models/upload-file.model';

@Injectable({
  providedIn: 'root'
})
export class UploadFileStore {
  readonly items = signal<UploadFile[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<UploadFile | null>(null);

  setItems(items: UploadFile[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: UploadFile | null): void {
    this.selectedItem.set(item);
  }
}
