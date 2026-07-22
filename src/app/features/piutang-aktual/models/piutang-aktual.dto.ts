export interface PiutangAktualDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  tanggal_update: string;
  kode_realtime: string;
  id_aolinv: number;
  id_aolcust: number;
  nomor_invoice: string;
  tanggal_jatuhtempo: string;
  total_piutang: number;
  sisa_piutang: number;
  created_at?: string;
  updated_at?: string;
}
