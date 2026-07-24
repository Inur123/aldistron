import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillageFacade } from '../../facades/village.facade';

@Component({
  selector: 'app-village-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full font-sans">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-foreground">Modul Village</h1>
          <p class="text-xs text-muted-foreground mt-0.5">Kelola data modul Village arsitektur RAPIDATA</p>
        </div>
      </div>

      <div class="border-t border-b border-border py-12 text-center text-muted-foreground text-sm">
        Belum ada data Village.
      </div>
    </div>
  `
})
export class VillageListComponent implements OnInit {
  constructor(public facade: VillageFacade) {}

  ngOnInit(): void {
    this.facade.loadItems();
  }
}
