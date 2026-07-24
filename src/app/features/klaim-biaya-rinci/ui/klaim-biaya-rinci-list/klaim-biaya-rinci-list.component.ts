import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KlaimBiayaRinciFacade } from '../../facades/klaim-biaya-rinci.facade';

@Component({
  selector: 'app-klaim-biaya-rinci-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full font-sans">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-foreground">Modul Klaim Biaya Rinci</h1>
          <p class="text-xs text-muted-foreground mt-0.5">Kelola data modul Klaim Biaya Rinci arsitektur RAPIDATA</p>
        </div>
      </div>

      <div class="border-t border-b border-border py-12 text-center text-muted-foreground text-sm">
        Belum ada data Klaim Biaya Rinci.
      </div>
    </div>
  `
})
export class KlaimBiayaRinciListComponent implements OnInit {
  constructor(public facade: KlaimBiayaRinciFacade) {}

  ngOnInit(): void {
    this.facade.loadItems();
  }
}
