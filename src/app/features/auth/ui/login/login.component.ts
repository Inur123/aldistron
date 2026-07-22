import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthFacade } from '../../facades/auth.facade';
import { LucideAngularModule, Mail, Lock, LogIn, ArrowRight } from 'lucide-angular';

import { AuthHeaderComponent } from '../../components/auth-header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, LucideAngularModule, AuthHeaderComponent],
  template: `
    <div class="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-slate-100">
      <div class="w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
        <!-- Reusable Header dari folder components/ -->
        <app-auth-header title="Login Aldistron" subtitle="Masuk ke sistem ERP & Sales Force Platform">
          <lucide-angular [img]="logInIcon" class="w-6 h-6"></lucide-angular>
        </app-auth-header>

        <!-- Form -->
        <form (ngSubmit)="onLogin()" class="space-y-5">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Email Administrator</label>
            <div class="relative">
              <span class="absolute left-4 top-3.5 text-slate-500">
                <lucide-angular [img]="mailIcon" class="w-5 h-5"></lucide-angular>
              </span>
              <input type="email" [(ngModel)]="email" name="email" required
                     placeholder="admin@aldistron.com"
                     class="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"/>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Password</label>
            <div class="relative">
              <span class="absolute left-4 top-3.5 text-slate-500">
                <lucide-angular [img]="lockIcon" class="w-5 h-5"></lucide-angular>
              </span>
              <input type="password" [(ngModel)]="password" name="password" required
                     placeholder="••••••••"
                     class="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"/>
            </div>
          </div>

          @if (facade.error()) {
            <div class="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs">
              {{ facade.error() }}
            </div>
          }

          <button type="submit" [disabled]="facade.isLoading()"
                  class="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 text-sm disabled:opacity-50">
            <span>{{ facade.isLoading() ? 'Memproses...' : 'Masuk Aplikasi' }}</span>
            <lucide-angular [img]="arrowRightIcon" class="w-4 h-4"></lucide-angular>
          </button>
        </form>

        <div class="mt-6 text-center text-xs text-slate-400">
          Belum memiliki lisensi? 
          <a routerLink="/auth/register" class="text-indigo-400 hover:underline font-semibold">Registrasi Kode Verifikasi</a>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  readonly mailIcon = Mail;
  readonly lockIcon = Lock;
  readonly logInIcon = LogIn;
  readonly arrowRightIcon = ArrowRight;

  email = '';
  password = '';

  constructor(public facade: AuthFacade, private router: Router) {}

  onLogin(): void {
    if (!this.email || !this.password) return;
    this.facade.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        if (res.status) {
          this.router.navigate(['/']);
        }
      }
    });
  }
}
