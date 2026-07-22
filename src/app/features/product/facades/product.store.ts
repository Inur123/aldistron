import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductStore {
  readonly products = signal<Product[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedProduct = signal<Product | null>(null);

  setProducts(products: Product[]): void {
    this.products.set(products);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedProduct(product: Product | null): void {
    this.selectedProduct.set(product);
  }
}
