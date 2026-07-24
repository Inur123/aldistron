import { Injectable } from '@angular/core';
import { ProductRepository } from '../repositories/product.repository';
import { ProductStore } from './product.store';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductFacade {
  constructor(
    private productRepository: ProductRepository,
    private store: ProductStore
  ) {}

  get products() {
    return this.store.products;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedProduct() {
    return this.store.selectedProduct;
  }

  loadProducts(): void {
    this.store.setLoading(true);
    this.productRepository.getProducts().subscribe({
      next: (data) => {
        this.store.setProducts(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectProduct(product: Product | null): void {
    this.store.setSelectedProduct(product);
  }

  addProduct(product: Product): void {
    this.store.addProduct(product);
  }

  updateProduct(updated: Product): void {
    this.store.updateProduct(updated);
  }

  deleteProduct(id: number): void {
    this.store.deleteProduct(id);
  }
}
