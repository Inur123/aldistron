import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';

export interface KunjunganSetor {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  kodeKunjungan: string;
  idUserdata: number | null;
  v100000: number | null;
  v75000: number | null;
  v50000: number | null;
  v20000: number | null;
  v10000: number | null;
  v5000: number | null;
  v2000: number | null;
  v1000: number | null;
  v500: number | null;
  v200: number | null;
  v100: number | null;
  v50: number | null;
  totalSetoran: number | null;
  selisihSetoran: number | null;
  statusSetoran: string;
  kunci: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
  cabang?: Cabang;           // belongsTo
}
