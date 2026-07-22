export interface HargaPromoDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  nama_hargapromo: string;
  keterangan_hargapromo: string;
  aktif_hargapromo: boolean;
  awal_hargapromo: string;
  akhir_hargapromo: string;
  tipe_alokasi_hargapromo: string;
  created_at?: string;
  updated_at?: string;
}
