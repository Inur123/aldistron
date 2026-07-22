import { UseradminDto } from '../../useradmin/models/useradmin.dto';
import { UserdataDto } from '../../userdata/models/userdata.dto';
import { TokenDto } from '../../token/models/token.dto';
import { AolSessionDto } from '../../aol-session/models/aol-session.dto';

// Payload Request untuk Register (Membutuhkan Kode Verifikasi yang terhubung ke AOL Session)
export interface RegisterRequestDto {
  nama: string;
  email: string;
  password: string;
  token_verifikasi: string; // Terhubung dengan verifikasi & aol-session
}

// Payload Request untuk Login
export interface LoginRequestDto {
  email: string;
  password: string;
}

// Response DTO Hasil Auth (Login & Register)
export interface AuthResponseDto {
  message: string;
  status: boolean;
  token: TokenDto;
  useradmin: UseradminDto;
  userdata: UserdataDto;
  aol_session?: AolSessionDto;
}
