import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';

export interface PiutangPlafon {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  namaPiutangplafon: string;
  keteranganPiutangplafon: string;
  maxQtyInvoice: number;
  maxNilaiInvoice: number;
  maxNilaiRetur: number;
  maxLamaJatuhtempo: number;
  aktifPiutangplafon: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
  cabang?: Cabang;           // belongsTo
}
