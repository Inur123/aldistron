export interface InfoGlobalDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  id_userdata: number;
  nama_infoglobal: string;
  slug: string;
  keterangan_infoglobal: string;
  aktif_infoglobal: boolean;
  awal_infoglobal: string;
  akhir_infoglobal: string;
  gambar_infoglobal: string;
  array_idvendor: number[];
  created_at?: string;
  updated_at?: string;
}
