import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpFacade } from '../../facades/otp.facade';

@Component({
  selector: 'app-otp-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full font-sans">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-foreground">Modul Otp</h1>
          <p class="text-xs text-muted-foreground mt-0.5">Kelola data modul Otp arsitektur RAPIDATA</p>
        </div>
      </div>

      <div class="border-t border-b border-border py-12 text-center text-muted-foreground text-sm">
        Belum ada data Otp.
      </div>
    </div>
  `
})
export class OtpListComponent implements OnInit {
  constructor(public facade: OtpFacade) {}

  ngOnInit(): void {
    this.facade.loadItems();
  }
}
