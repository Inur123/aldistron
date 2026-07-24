import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HargaJualRinciFacade } from '../../facades/harga-jual-rinci.facade';

@Component({
  selector: 'app-harga-jual-rinci-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full font-sans">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-foreground">Modul Harga Jual Rinci</h1>
          <p class="text-xs text-muted-foreground mt-0.5">Kelola data modul Harga Jual Rinci arsitektur RAPIDATA</p>
        </div>
      </div>

      <div class="border-t border-b border-border py-12 text-center text-muted-foreground text-sm">
        Belum ada data Harga Jual Rinci.
      </div>
    </div>
  `
})
export class HargaJualRinciListComponent implements OnInit {
  constructor(public facade: HargaJualRinciFacade) {}

  ngOnInit(): void {
    this.facade.loadItems();
  }
}
