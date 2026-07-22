export interface InfoGlobalDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  id_userdata: number | null;
  nama_infoglobal: string;
  slug: string;
  keterangan_infoglobal: string;
  aktif_infoglobal: boolean;
  awal_infoglobal: string;
  akhir_infoglobal: string;
  gambar_infoglobal: string;
  array_idvendor: number | null[];
  created_at?: string;
  updated_at?: string;
}
