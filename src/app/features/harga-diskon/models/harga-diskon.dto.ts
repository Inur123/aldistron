export interface HargaDiskonDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  nama_hargadiskon: string;
  keterangan_hargadiskon: string;
  aktif_hargadiskon: boolean;
  awal_hargadiskon: string;
  akhir_hargadiskon: string;
  tipe_alokasi_hargadiskon: string;
  created_at?: string;
  updated_at?: string;
}
