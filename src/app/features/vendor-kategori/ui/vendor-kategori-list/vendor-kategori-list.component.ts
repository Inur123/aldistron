import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorKategoriFacade } from '../../facades/vendor-kategori.facade';


@Component({
  selector: 'app-vendor-kategori-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul Vendor Kategori</h1>
      <ul class="space-y-2">
        @for (c of facade.kategories(); track c.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ c.namaKategori }} - {{ c.keteranganKategori }}
          </li>
        }
      </ul>
    </div>
  `
})
export class VendorKategoriListComponent implements OnInit {
  constructor(public facade: VendorKategoriFacade) {}

  ngOnInit(): void {
    this.facade.loadKategories();
  }
}
