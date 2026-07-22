import { Injectable } from '@angular/core';
import { AolTaxRepository } from '../repositories/aol-tax.repository';
import { AolTaxStore } from './aol-tax.store';
import { AolTax } from '../models/aol-tax.model';

@Injectable({
  providedIn: 'root'
})
export class AolTaxFacade {
  constructor(
    private repository: AolTaxRepository,
    private store: AolTaxStore
  ) {}

  get aolTaxes() {
    return this.store.aolTaxes;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedAolTax() {
    return this.store.selectedAolTax;
  }

  loadAolTaxes(): void {
    this.store.setLoading(true);
    this.repository.getAolTaxes().subscribe({
      next: (data) => {
        this.store.setAolTaxes(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectAolTax(aolTax: AolTax | null): void {
    this.store.setSelectedAolTax(aolTax);
  }
}
