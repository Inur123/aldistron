export interface AolTokenDto {
  id: number;
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  tgl_expired: string;
  aoluser_name: string;
  aoluser_nickname: string;
  aoluser_mobile: string;
  aoluser_id: string;
  aoluser_email: string;
  kodeseri_koneksi: string;
  created_at?: string;
  updated_at?: string;
}
