import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdukKompetitorFacade } from '../../facades/produk-kompetitor.facade';


@Component({
  selector: 'app-produk-kompetitor-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul Produk Kompetitor</h1>
      <ul class="space-y-2">
        @for (k of facade.kompetitors(); track k.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ k.namaProduk }} - Produsen: {{ k.produsenProduk }}
          </li>
        }
      </ul>
    </div>
  `
})
export class ProdukKompetitorListComponent implements OnInit {
  constructor(public facade: ProdukKompetitorFacade) {}

  ngOnInit(): void {
    this.facade.loadKompetitors();
  }
}
