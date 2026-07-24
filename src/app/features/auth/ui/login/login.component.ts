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
  selector: 'app-login',
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
            <h3 hlmCardTitle>Login ke Akun Anda</h3>
            <p hlmCardDescription>Masukkan email di bawah untuk masuk ke sistem</p>
          </hlm-card-header>

          <div hlmCardContent>
            <!-- ngNativeValidate: aktifkan HTML5 browser validation -->
            <form ngNativeValidate (ngSubmit)="onLogin()" class="flex flex-col gap-6">
              <hlm-field-group>

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
                    placeholder="admin@aldistron.com"
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
                  Memproses...
                } @else {
                  Login
                }
              </button>
            </form>
          </div>

          <div hlmCardFooter>
            <p class="text-center text-sm w-full">
              Belum punya akun?
              <a routerLink="/auth/register" class="underline underline-offset-4 font-medium">
                Daftar
              </a>
            </p>
          </div>
        </hlm-card>

      </div>
    </div>
  `,
})
export class LoginComponent {
  readonly eyeIcon = Eye;
  readonly eyeOffIcon = EyeOff;

  showPassword = signal(false);

  email = '';
  password = '';

  constructor(public facade: AuthFacade, private router: Router) {}

  onLogin(): void {
    this.facade.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        if (res.status) {
          toast.success('Login berhasil! Selamat datang.');
          this.router.navigate(['/dashboard']);
        } else {
          toast.error(this.facade.error() ?? 'Login gagal, coba lagi.');
        }
      },
      error: () => {
        toast.error('Terjadi kesalahan, coba lagi.');
      }
    });
  }
}
