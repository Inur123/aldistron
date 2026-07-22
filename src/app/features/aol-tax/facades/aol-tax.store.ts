import { Injectable, signal } from '@angular/core';
import { AolTax } from '../models/aol-tax.model';

@Injectable({
  providedIn: 'root'
})
export class AolTaxStore {
  readonly aolTaxes = signal<AolTax[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedAolTax = signal<AolTax | null>(null);

  setAolTaxes(aolTaxes: AolTax[]): void {
    this.aolTaxes.set(aolTaxes);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedAolTax(aolTax: AolTax | null): void {
    this.selectedAolTax.set(aolTax);
  }
}
