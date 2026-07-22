export interface PiutangPlafonDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  nama_piutangplafon: string;
  keterangan_piutangplafon: string;
  max_qty_invoice: number | null;
  max_nilai_invoice: number | null;
  max_nilai_retur: number | null;
  max_lama_jatuhtempo: number | null;
  aktif_piutangplafon: boolean;
  created_at?: string;
  updated_at?: string;
}
