import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center mb-8">
      <div class="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mx-auto mb-3 border border-indigo-500/30">
        <ng-content></ng-content>
      </div>
      <h2 class="text-2xl font-extrabold tracking-tight text-white">{{ title }}</h2>
      <p class="text-slate-400 text-sm mt-1">{{ subtitle }}</p>
    </div>
  `
})
export class AuthHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
}
