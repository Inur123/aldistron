import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PengirimanRinciFacade } from '../../facades/pengiriman-rinci.facade';

@Component({
  selector: 'app-pengiriman-rinci-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full font-sans">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-foreground">Modul Pengiriman Rinci</h1>
          <p class="text-xs text-muted-foreground mt-0.5">Kelola data modul Pengiriman Rinci arsitektur RAPIDATA</p>
        </div>
      </div>

      <div class="border-t border-b border-border py-12 text-center text-muted-foreground text-sm">
        Belum ada data Pengiriman Rinci.
      </div>
    </div>
  `
})
export class PengirimanRinciListComponent implements OnInit {
  constructor(public facade: PengirimanRinciFacade) {}

  ngOnInit(): void {
    this.facade.loadItems();
  }
}
