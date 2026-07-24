import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AolTokenFacade } from '../../facades/aol-token.facade';

@Component({
  selector: 'app-aol-token-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full font-sans">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-foreground">Modul Aol Token</h1>
          <p class="text-xs text-muted-foreground mt-0.5">Kelola data modul Aol Token arsitektur RAPIDATA</p>
        </div>
      </div>

      <div class="border-t border-b border-border py-12 text-center text-muted-foreground text-sm">
        Belum ada data Aol Token.
      </div>
    </div>
  `
})
export class AolTokenListComponent implements OnInit {
  constructor(public facade: AolTokenFacade) {}

  ngOnInit(): void {
    this.facade.loadAolTokens();
  }
}
