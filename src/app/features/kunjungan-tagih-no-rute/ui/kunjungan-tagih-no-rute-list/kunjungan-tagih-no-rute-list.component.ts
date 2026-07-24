import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KunjunganTagihNoRuteFacade } from '../../facades/kunjungan-tagih-no-rute.facade';

@Component({
  selector: 'app-kunjungan-tagih-no-rute-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full font-sans">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-foreground">Modul Kunjungan Tagih No Rute</h1>
          <p class="text-xs text-muted-foreground mt-0.5">Kelola data modul Kunjungan Tagih No Rute arsitektur RAPIDATA</p>
        </div>
      </div>

      <div class="border-t border-b border-border py-12 text-center text-muted-foreground text-sm">
        Belum ada data Kunjungan Tagih No Rute.
      </div>
    </div>
  `
})
export class KunjunganTagihNoRuteListComponent implements OnInit {
  constructor(public facade: KunjunganTagihNoRuteFacade) {}

  ngOnInit(): void {
    this.facade.loadItems();
  }
}
