export interface PelangganPoinDto {
  id: number;
  id_userdata: number;
  id_pelanggan: number;
  id_jual: number;
  id_tagih: number;
  id_event: number;
  nama_event: string;
  poin_masuk: number;
  poin_keluar: number;
  keterangan: string;
  poin_saldo: number;
  aktif_event: boolean;
  created_at?: string;
  updated_at?: string;
}
