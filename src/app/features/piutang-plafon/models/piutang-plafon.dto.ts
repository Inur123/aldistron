export interface PiutangPlafonDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  nama_piutangplafon: string;
  keterangan_piutangplafon: string;
  max_qty_invoice: number;
  max_nilai_invoice: number;
  max_nilai_retur: number;
  max_lama_jatuhtempo: number;
  aktif_piutangplafon: boolean;
  created_at?: string;
  updated_at?: string;
}
