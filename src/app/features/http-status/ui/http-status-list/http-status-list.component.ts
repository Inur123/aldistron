import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpStatusFacade } from '../../facades/http-status.facade';

@Component({
  selector: 'app-http-status-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full font-sans">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-foreground">Modul Http Status</h1>
          <p class="text-xs text-muted-foreground mt-0.5">Kelola data modul Http Status arsitektur RAPIDATA</p>
        </div>
      </div>

      <div class="border-t border-b border-border py-12 text-center text-muted-foreground text-sm">
        Belum ada data Http Status.
      </div>
    </div>
  `
})
export class HttpStatusListComponent implements OnInit {
  constructor(public facade: HttpStatusFacade) {}

  ngOnInit(): void {
    this.facade.loadItems();
  }
}
