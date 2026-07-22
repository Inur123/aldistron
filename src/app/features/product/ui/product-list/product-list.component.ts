import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFacade } from '../../facades/product.facade';
import { LucideAngularModule, Package, Plus, RefreshCw } from 'lucide-angular';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  readonly icons = { Package, Plus, RefreshCw };

  constructor(public facade: ProductFacade) {}

  ngOnInit(): void {
    this.facade.loadProducts();
  }
}
