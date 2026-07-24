import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PengaturanFacade } from '../../facades/pengaturan.facade';


@Component({
  selector: 'app-pengaturan-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full font-sans">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-foreground">Modul Pengaturan</h1>
          <p class="text-xs text-muted-foreground mt-0.5">Kelola data modul Pengaturan arsitektur RAPIDATA</p>
        </div>
      </div>

      <div class="border-t border-b border-border py-12 text-center text-muted-foreground text-sm">
        Belum ada data Pengaturan.
      </div>
    </div>
  `
})
export class PengaturanListComponent implements OnInit {
  constructor(public facade: PengaturanFacade) {}

  ngOnInit(): void {
    this.facade.loadPengaturans();
  }
}
