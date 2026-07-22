import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AolSessionFacade } from '../../facades/aol-session.facade';

@Component({
  selector: 'app-aol-session-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul AOL Session</h1>
      <ul class="space-y-2">
        @for (item of facade.aolSessions(); track item.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            Session: {{ item.sessionAol }} - Host: {{ item.hostAol }}
          </li>
        }
      </ul>
    </div>
  `
})
export class AolSessionListComponent implements OnInit {
  constructor(public facade: AolSessionFacade) {}

  ngOnInit(): void {
    this.facade.loadAolSessions();
  }
}
