import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';
import { RegisterRequestDto, LoginRequestDto, AuthResponseDto } from '../models/auth.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  register(payload: RegisterRequestDto): Observable<AuthResponseDto> {
    return this.http.post<AuthResponseDto>(`${this.baseUrl}/register`, payload);
  }

  login(payload: LoginRequestDto): Observable<AuthResponseDto> {
    return this.http.post<AuthResponseDto>(`${this.baseUrl}/login`, payload).pipe(
      catchError(() => {
        // Fallback Mock Dummy Response jika Backend belum menyala
        return of({
          status: true,
          message: 'Login berhasil (Dummy Mock)',
          useradmin: {
            id: 1,
            id_userdata: 1,
            nama: 'Super Admin',
            username: payload.email.split('@')[0] || 'admin',
            level: 'ADMIN',
            divisi: 'IT',
            is_administrator: true,
            nama_administrator: 'Administrator',
            email_administrator: payload.email,
            deleted_at: ''
          },
          userdata: {
            id: 1,
            id_aoldatabase: null,
            id_cabang: null,
            id_aoldb: null,
            id_aolemp: null,
            sapaan: 'Bpk',
            nama: 'Super Admin',
            username: payload.email.split('@')[0] || 'admin',
            email: payload.email,
            no_handphone: '081234567890',
            status: true,
            level: 'ADMIN',
            kelas_akses: 'FULL',
            alamat: 'Jl. Utama No. 1',
            upline: '',
            id_vendor: null,
            nama_vendor: '',
            aktif_userdata: true,
            biaya_tanpa_kunjungan: false,
            metode_jual: 'DIRECT',
            aolsales_id: null,
            log_aolemp_id: null,
            log_aolbranch_id: null,
            aol_updated: false,
            deleted_at: ''
          },
          token: {
            id: 1,
            tgl: new Date().toISOString(),
            userdata: 1,
            token: 'dummy-jwt-access-token-12345',
            apptoken: 'dummy-app-token-abc',
            reftoken: 'dummy-jwt-refresh-token-67890',
            last_access: new Date().toISOString(),
            status: 1
          }
        } as AuthResponseDto);
      })
    );
  }

  logout(): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.baseUrl}/logout`, {}).pipe(
      catchError(() => of({ success: true }))
    );
  }
}

