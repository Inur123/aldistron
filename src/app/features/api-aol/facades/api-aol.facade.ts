import { Injectable } from '@angular/core';
import { ApiAolRepository } from '../repositories/api-aol.repository';
import { ApiAolStore } from './api-aol.store';
import { ApiAol } from '../models/api-aol.model';

@Injectable({
  providedIn: 'root'
})
export class ApiAolFacade {
  constructor(
    private repository: ApiAolRepository,
    private store: ApiAolStore
  ) {}

  get apiAols() {
    return this.store.apiAols;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedApiAol() {
    return this.store.selectedApiAol;
  }

  loadApiAols(): void {
    this.store.setLoading(true);
    this.repository.getApiAols().subscribe({
      next: (data) => {
        this.store.setApiAols(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectApiAol(apiAol: ApiAol | null): void {
    this.store.setSelectedApiAol(apiAol);
  }
}
