import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HargaDiskonProdukFacade } from '../../facades/harga-diskon-produk.facade';

@Component({
  selector: 'app-harga-diskon-produk-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full font-sans">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-foreground">Modul Harga Diskon Produk</h1>
          <p class="text-xs text-muted-foreground mt-0.5">Kelola data modul Harga Diskon Produk arsitektur RAPIDATA</p>
        </div>
      </div>

      <div class="border-t border-b border-border py-12 text-center text-muted-foreground text-sm">
        Belum ada data Harga Diskon Produk.
      </div>
    </div>
  `
})
export class HargaDiskonProdukListComponent implements OnInit {
  constructor(public facade: HargaDiskonProdukFacade) {}

  ngOnInit(): void {
    this.facade.loadItems();
  }
}
