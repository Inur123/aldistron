export interface VerifikasiRinciDto {
  id: number;
  id_verifikasi: number;
  id_cabang: number;
  kode_verifikasi: string;
  kode_register: string;
  id_userdata: number;
  user_register: string;
  email_register: string;
  divisi: string;
  kelas_akses: string;
  id_vendor: number;
  nama_vendor: string;
  keterangan_kode: string;
  log_aolbranch_id: number;
  id_device: string;
  device: string;
  level: string;
  created_at?: string;
  updated_at?: string;
}
