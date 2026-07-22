export interface PelangganPoinDto {
  id: number;
  id_userdata: number | null;
  id_pelanggan: number | null;
  id_jual: number | null;
  id_tagih: number | null;
  id_event: number | null;
  nama_event: string;
  poin_masuk: number | null;
  poin_keluar: number | null;
  keterangan: string;
  poin_saldo: number | null;
  aktif_event: boolean;
  created_at?: string;
  updated_at?: string;
}
