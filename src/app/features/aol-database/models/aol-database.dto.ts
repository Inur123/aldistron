export interface AolDatabaseDto {
  id: number;
  id_aoldb: number | null;
  id_aoltoken: number | null;
  nama_aoldatabase: string;
  aktif_aoldatabase: boolean;
  sync_satu: boolean;
  sync_dua: boolean;
  accessible_until_aoldatabase: string;
  user_aolconnector: string;
  email_aolconnector: string;
  handphone_aoldatabase: string;
  id_alserwa: string;
  sync_employee: boolean;
  id_employee: number | null;
  id_salesman: number | null;
  kode_seri_koneksi: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}
