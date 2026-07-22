import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthFacade } from '../../facades/auth.facade';
import { LucideAngularModule, User, Mail, Lock, KeyRound, UserPlus, ArrowRight } from 'lucide-angular';

import { AuthHeaderComponent } from '../../components/auth-header.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, LucideAngularModule, AuthHeaderComponent],
  template: `
    <div class="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-slate-100">
      <div class="w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
        <!-- Reusable Header dari folder components/ -->
        <app-auth-header title="Registrasi Pengguna" subtitle="Aktivasi Lisensi Kode Verifikasi Accurate Online (AOL)">
          <lucide-angular [img]="userPlusIcon" class="w-6 h-6"></lucide-angular>
        </app-auth-header>

        <!-- Form -->
        <form (ngSubmit)="onRegister()" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Nama Lengkap</label>
            <div class="relative">
              <span class="absolute left-4 top-3.5 text-slate-500">
                <lucide-angular [img]="userIcon" class="w-5 h-5"></lucide-angular>
              </span>
              <input type="text" [(ngModel)]="nama" name="nama" required
                     placeholder="Budi Santoso"
                     class="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"/>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Email Pengguna</label>
            <div class="relative">
              <span class="absolute left-4 top-3.5 text-slate-500">
                <lucide-angular [img]="mailIcon" class="w-5 h-5"></lucide-angular>
              </span>
              <input type="email" [(ngModel)]="email" name="email" required
                     placeholder="budi@perusahaan.com"
                     class="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"/>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Password</label>
            <div class="relative">
              <span class="absolute left-4 top-3.5 text-slate-500">
                <lucide-angular [img]="lockIcon" class="w-5 h-5"></lucide-angular>
              </span>
              <input type="password" [(ngModel)]="password" name="password" required
                     placeholder="••••••••"
                     class="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"/>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1.5">Kode Verifikasi AOL (Token Session)</label>
            <div class="relative">
              <span class="absolute left-4 top-3.5 text-amber-500">
                <lucide-angular [img]="keyRoundIcon" class="w-5 h-5"></lucide-angular>
              </span>
              <input type="text" [(ngModel)]="tokenVerifikasi" name="tokenVerifikasi" required
                     placeholder="VERIFY-AOL-XXXX-XXXX"
                     class="w-full bg-slate-800/80 border border-amber-500/40 rounded-xl pl-12 pr-4 py-3 text-sm text-amber-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all uppercase"/>
            </div>
          </div>

          @if (facade.error()) {
            <div class="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs">
              {{ facade.error() }}
            </div>
          }

          <button type="submit" [disabled]="facade.isLoading()"
                  class="w-full mt-2 py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 text-sm disabled:opacity-50">
            <span>{{ facade.isLoading() ? 'Mendaftar & Verifikasi...' : 'Daftar Akun Baru' }}</span>
            <lucide-angular [img]="arrowRightIcon" class="w-4 h-4"></lucide-angular>
          </button>
        </form>

        <div class="mt-6 text-center text-xs text-slate-400">
          Sudah memiliki akun? 
          <a routerLink="/auth/login" class="text-indigo-400 hover:underline font-semibold">Masuk disini</a>
        </div>
      </div>
    </div>
  `
})
export class RegisterComponent {
  readonly userIcon = User;
  readonly mailIcon = Mail;
  readonly lockIcon = Lock;
  readonly keyRoundIcon = KeyRound;
  readonly userPlusIcon = UserPlus;
  readonly arrowRightIcon = ArrowRight;

  nama = '';
  email = '';
  password = '';
  tokenVerifikasi = '';

  constructor(public facade: AuthFacade, private router: Router) {}

  onRegister(): void {
    if (!this.nama || !this.email || !this.password || !this.tokenVerifikasi) return;

    this.facade.register({
      nama: this.nama,
      email: this.email,
      password: this.password,
      token_verifikasi: this.tokenVerifikasi
    }).subscribe({
      next: (res) => {
        if (res.status) {
          this.router.navigate(['/']);
        }
      }
    });
  }
}
