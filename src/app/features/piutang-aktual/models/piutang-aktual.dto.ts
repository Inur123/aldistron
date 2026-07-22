export interface PiutangAktualDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  tanggal_update: string;
  kode_realtime: string;
  id_aolinv: number | null;
  id_aolcust: number | null;
  nomor_invoice: string;
  tanggal_jatuhtempo: string;
  total_piutang: number | null;
  sisa_piutang: number | null;
  created_at?: string;
  updated_at?: string;
}
