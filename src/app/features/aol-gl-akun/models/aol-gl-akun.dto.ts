export interface AolGlAkunDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_aolgl: number | null;
  id_parent_aolgl: number | null;
  nomor_aolglakun: string;
  nama_aolglakun: string;
  type_account: string;
  tipe_akun: string;
  suspended_aol: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}
