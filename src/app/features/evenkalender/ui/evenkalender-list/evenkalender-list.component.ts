import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvenkalenderFacade } from '../../facades/evenkalender.facade';

@Component({
  selector: 'app-evenkalender-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full font-sans">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-foreground">Modul Evenkalender</h1>
          <p class="text-xs text-muted-foreground mt-0.5">Kelola data modul Evenkalender arsitektur RAPIDATA</p>
        </div>
      </div>

      <div class="border-t border-b border-border py-12 text-center text-muted-foreground text-sm">
        Belum ada data Evenkalender.
      </div>
    </div>
  `
})
export class EvenkalenderListComponent implements OnInit {
  constructor(public facade: EvenkalenderFacade) {}

  ngOnInit(): void {
    this.facade.loadItems();
  }
}
