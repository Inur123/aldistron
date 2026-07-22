import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { ProductMapper } from './product.mapper';


@Injectable({
  providedIn: 'root'
})
export class ProductRepository {
  constructor(private productService: ProductService) {}

  getProducts(): Observable<Product[]> {
    return this.productService.getProducts().pipe(
      map(dtos => ProductMapper.toModelList(dtos))
    );
  }
}
