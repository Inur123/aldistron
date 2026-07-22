export interface KunjunganTagihRinciDto {
  id: number;
  id_kunjungantagih: number | null;
  nomor_penagihan: string;
  kode_kunjungan: string;
  id_userdata: number | null;
  id_pelanggan: number | null;
  hari_kunjungantagih: string;
  tanggal_jatuhtempo: string;
  id_aolinv: number | null;
  id_aolcust: number | null;
  nomor_invoice: string;
  nilai_piutang: number | null;
  pembayaran_tunai: number | null;
  pembayaran_transfer: number | null;
  pembayaran_cekgiro: number | null;
  nomor_cekgiro: string;
  bank_cekgiro: string;
  id_bank: number | null;
  tanggal_cekgiro: string;
  status_penagihan: number | null;
  kode_posting_pembayaran: string;
  created_at?: string;
  updated_at?: string;
}
