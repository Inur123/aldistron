export interface KunjunganTagihRinciDto {
  id: number;
  id_kunjungantagih: number;
  nomor_penagihan: string;
  kode_kunjungan: string;
  id_userdata: number;
  id_pelanggan: number;
  hari_kunjungantagih: string;
  tanggal_jatuhtempo: string;
  id_aolinv: number;
  id_aolcust: number;
  nomor_invoice: string;
  nilai_piutang: number;
  pembayaran_tunai: number;
  pembayaran_transfer: number;
  pembayaran_cekgiro: number;
  nomor_cekgiro: string;
  bank_cekgiro: string;
  id_bank: number;
  tanggal_cekgiro: string;
  status_penagihan: number;
  kode_posting_pembayaran: string;
  created_at?: string;
  updated_at?: string;
}
