export interface PengirimanRinciDto {
  id: number;
  id_pengiriman: number | null;
  id_kunjunganjual: number | null;
  nomor_salesorder: string;
  id_pelanggan: number | null;
  nama_pelanggan: string;
  nilai_salesorder: number | null;
  jsonb_barang_terkirim: any;
  keterangan: string;
  status_kirim: string;
  selesai_kirim: boolean;
  created_at?: string;
  updated_at?: string;
}
