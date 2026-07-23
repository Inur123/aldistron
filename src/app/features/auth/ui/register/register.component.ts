import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthFacade } from '../../facades/auth.facade';
import { LucideAngularModule, Eye, EyeOff } from 'lucide-angular';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';
import { toast } from '@spartan-ng/brain/sonner';

// Spartan UI
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';

@Component({
  selector: 'app-register',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    RouterLink,
    LucideAngularModule,
    ...HlmCardImports,
    ...HlmFieldImports,
    ...HlmInputImports,
    ...HlmButtonImports,
    ...HlmSpinnerImports,
  ],
  template: `
    <div class="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div class="w-full max-w-sm">

        <hlm-card>
          <hlm-card-header>
            <h3 hlmCardTitle>Buat Akun Baru</h3>
            <p hlmCardDescription>Isi informasi di bawah untuk membuat akun Anda</p>
          </hlm-card-header>

          <div hlmCardContent>
            <!-- ngNativeValidate: aktifkan HTML5 browser validation -->
            <form ngNativeValidate (ngSubmit)="onRegister()" class="flex flex-col gap-6">
              <hlm-field-group>

                <!-- Nama -->
                <hlm-field>
                  <label hlmFieldLabel for="nama">
                    Nama Lengkap
                  </label>
                  <input
                    hlmInput
                    id="nama"
                    type="text"
                    name="nama"
                    [(ngModel)]="nama"
                    placeholder="Budi Santoso"
                    required
                  />
                </hlm-field>

                <!-- Email -->
                <hlm-field>
                  <label hlmFieldLabel for="email">
                    Email
                  </label>
                  <input
                    hlmInput
                    id="email"
                    type="email"
                    name="email"
                    [(ngModel)]="email"
                    placeholder="budi@perusahaan.com"
                    required
                  />
                </hlm-field>

                <!-- Password with Eye Toggle -->
                <hlm-field>
                  <label hlmFieldLabel for="password">
                    Password
                  </label>
                  <div class="relative">
                    <input
                      hlmInput
                      id="password"
                      [type]="showPassword() ? 'text' : 'password'"
                      name="password"
                      [(ngModel)]="password"
                      placeholder="••••••••"
                      class="pr-10"
                      required
                    />
                    <button
                      type="button"
                      (click)="showPassword.set(!showPassword())"
                      class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      tabindex="-1"
                    >
                      <lucide-angular
                        [img]="showPassword() ? eyeOffIcon : eyeIcon"
                        class="w-4 h-4 cursor-pointer"
                      />
                    </button>
                  </div>
                </hlm-field>

                <!-- Token AOL -->
                <hlm-field>
                  <label hlmFieldLabel for="token">
                    Kode Verifikasi
                  </label>
                  <input
                    hlmInput
                    id="token"
                    type="text"
                    name="tokenVerifikasi"
                    [(ngModel)]="tokenVerifikasi"
                    placeholder="VERIFY-AOL-XXXX-XXXX"
                    class="uppercase"
                    required
                  />
                </hlm-field>

              </hlm-field-group>

              <!-- Submit Button with Spinner -->
              <button
                hlmBtn
                type="submit"
                class="w-full cursor-pointer"
                [disabled]="facade.isLoading()"
              >
                @if (facade.isLoading()) {
                  <hlm-spinner />
                  Mendaftar...
                } @else {
                  Buat Akun
                }
              </button>
            </form>
          </div>

          <div hlmCardFooter>
            <p class="text-center text-sm w-full">
              Sudah punya akun?
              <a routerLink="/auth/login" class="underline underline-offset-4 font-medium">
                Login
              </a>
            </p>
          </div>
        </hlm-card>

      </div>
    </div>
  `,
})
export class RegisterComponent {
  readonly eyeIcon = Eye;
  readonly eyeOffIcon = EyeOff;

  showPassword = signal(false);

  nama = '';
  email = '';
  password = '';
  tokenVerifikasi = '';

  constructor(public facade: AuthFacade, private router: Router) {}

  onRegister(): void {
    this.facade.register({
      nama: this.nama,
      email: this.email,
      password: this.password,
      token_verifikasi: this.tokenVerifikasi,
    }).subscribe({
      next: (res) => {
        if (res.status) {
          toast.success('Akun berhasil dibuat! Silahkan login.');
          this.router.navigate(['/']);
        } else {
          toast.error(this.facade.error() ?? 'Registrasi gagal, coba lagi.');
        }
      },
      error: () => {
        toast.error('Terjadi kesalahan, coba lagi.');
      }
    });
  }
}
