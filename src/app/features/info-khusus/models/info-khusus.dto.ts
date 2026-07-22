export interface InfoKhususDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  id_userdata: number | null;
  id_pelanggan: number | null;
  nama_infokhusus: string;
  slug: string;
  keterangan_infokhusus: string;
  aktif_infokhusus: boolean;
  awal_infokhusus: string;
  akhir_infokhusus: string;
  gambar_infokhusus: string;
  created_at?: string;
  updated_at?: string;
}
