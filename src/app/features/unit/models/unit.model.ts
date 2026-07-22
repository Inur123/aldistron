import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface Unit {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idAolunit: number;
  namaUnit: string;
  keteranganUnit: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
}
