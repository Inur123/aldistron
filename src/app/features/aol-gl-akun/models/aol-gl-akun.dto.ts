export interface AolGlAkunDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_aolgl: number;
  id_parent_aolgl: number;
  nomor_aolglakun: string;
  nama_aolglakun: string;
  type_account: string;
  tipe_akun: string;
  suspended_aol: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}
