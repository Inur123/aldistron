export interface PengirimanRinciDto {
  id: number;
  id_pengiriman: number;
  id_kunjunganjual: number;
  nomor_salesorder: string;
  id_pelanggan: number;
  nama_pelanggan: string;
  nilai_salesorder: number;
  jsonb_barang_terkirim: any;
  keterangan: string;
  status_kirim: string;
  selesai_kirim: boolean;
  created_at?: string;
  updated_at?: string;
}
