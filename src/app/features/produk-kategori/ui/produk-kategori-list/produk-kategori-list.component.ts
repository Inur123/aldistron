import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdukKategoriFacade } from '../../facades/produk-kategori.facade';



@Component({
  selector: 'app-produk-kategori-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Daftar Produk Kategori</h1>
      <ul class="space-y-2">
        @for (category of facade.categories(); track category.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ category.namaKategori }} - {{ category.keteranganKategori }}
          </li>
        }
      </ul>
    </div>
  `
})
export class ProdukKategoriListComponent implements OnInit {
  constructor(public facade: ProdukKategoriFacade) {}

  ngOnInit(): void {
    this.facade.loadCategories();
  }
}
