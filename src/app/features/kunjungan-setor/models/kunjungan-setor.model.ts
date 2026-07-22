import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';

export interface KunjunganSetor {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  kodeKunjungan: string;
  idUserdata: number;
  v100000: number;
  v75000: number;
  v50000: number;
  v20000: number;
  v10000: number;
  v5000: number;
  v2000: number;
  v1000: number;
  v500: number;
  v200: number;
  v100: number;
  v50: number;
  totalSetoran: number;
  selisihSetoran: number;
  statusSetoran: string;
  kunci: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
  cabang?: Cabang;           // belongsTo
}
