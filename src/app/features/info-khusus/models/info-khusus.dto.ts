export interface InfoKhususDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  id_userdata: number;
  id_pelanggan: number;
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
