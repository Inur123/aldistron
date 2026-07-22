export interface KunjunganTagihDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  kode_kunjungan: string;
  id_userdata: number | null;
  id_pelanggan: number | null;
  nomor_pelanggan: string;
  id_aolcust: number | null;
  id_aolsr: number | null;
  nomor_salesreceipt: string;
  hari_kunjungantagih: string;
  tanggal_kunjungantagih: string;
  in_rute: boolean;
  latlong_kunjungantagih: string;
  created_at?: string;
  updated_at?: string;
}
