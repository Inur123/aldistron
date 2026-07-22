import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface AolGlAkun {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idAolgl: number;
  idParentAolgl: number;
  nomorAolglakun: string;
  namaAolglakun: string;
  typeAccount: string;
  tipeAkun: string;
  suspendedAol: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
}
