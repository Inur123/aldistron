import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';

export interface PiutangPlafon {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  namaPiutangplafon: string;
  keteranganPiutangplafon: string;
  maxQtyInvoice: number | null;
  maxNilaiInvoice: number | null;
  maxNilaiRetur: number | null;
  maxLamaJatuhtempo: number | null;
  aktifPiutangplafon: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
  cabang?: Cabang;           // belongsTo
}
