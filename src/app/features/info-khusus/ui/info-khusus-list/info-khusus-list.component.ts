import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoKhususFacade } from '../../facades/info-khusus.facade';

@Component({
  selector: 'app-info-khusus-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full font-sans">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-foreground">Modul Info Khusus</h1>
          <p class="text-xs text-muted-foreground mt-0.5">Kelola data modul Info Khusus arsitektur RAPIDATA</p>
        </div>
      </div>

      <div class="border-t border-b border-border py-12 text-center text-muted-foreground text-sm">
        Belum ada data Info Khusus.
      </div>
    </div>
  `
})
export class InfoKhususListComponent implements OnInit {
  constructor(public facade: InfoKhususFacade) {}

  ngOnInit(): void {
    this.facade.loadItems();
  }
}
