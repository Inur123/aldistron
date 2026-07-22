import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdukBrandFacade } from '../../facades/produk-brand.facade';


@Component({
  selector: 'app-produk-brand-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul Produk Brand</h1>
      <ul class="space-y-2">
        @for (b of facade.brands(); track b.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ b.namaBrand }} - {{ b.keteranganBrand }}
          </li>
        }
      </ul>
    </div>
  `
})
export class ProdukBrandListComponent implements OnInit {
  constructor(public facade: ProdukBrandFacade) {}

  ngOnInit(): void {
    this.facade.loadBrands();
  }
}
