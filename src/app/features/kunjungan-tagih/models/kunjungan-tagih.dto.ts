export interface KunjunganTagihDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  kode_kunjungan: string;
  id_userdata: number;
  id_pelanggan: number;
  nomor_pelanggan: string;
  id_aolcust: number;
  id_aolsr: number;
  nomor_salesreceipt: string;
  hari_kunjungantagih: string;
  tanggal_kunjungantagih: string;
  in_rute: boolean;
  latlong_kunjungantagih: string;
  created_at?: string;
  updated_at?: string;
}
