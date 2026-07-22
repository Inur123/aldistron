import { Injectable, signal } from '@angular/core';
import { ApiAol } from '../models/api-aol.model';

@Injectable({
  providedIn: 'root'
})
export class ApiAolStore {
  readonly apiAols = signal<ApiAol[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedApiAol = signal<ApiAol | null>(null);

  setApiAols(apiAols: ApiAol[]): void {
    this.apiAols.set(apiAols);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedApiAol(apiAol: ApiAol | null): void {
    this.selectedApiAol.set(apiAol);
  }
}
