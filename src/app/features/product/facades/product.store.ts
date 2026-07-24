import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductStore {
  readonly products = signal<Product[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedProduct = signal<Product | null>(null);

  addProduct(product: Product): void {
    this.products.update(prods => [product, ...prods]);
  }

  updateProduct(updated: Product): void {
    this.products.update(prods => prods.map(p => p.id === updated.id ? { ...p, ...updated } : p));
  }

  deleteProduct(id: number): void {
    this.products.update(prods => prods.filter(p => p.id !== id));
  }

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
