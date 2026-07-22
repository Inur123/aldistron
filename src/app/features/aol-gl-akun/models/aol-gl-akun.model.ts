import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface AolGlAkun {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idAolgl: number | null;
  idParentAolgl: number | null;
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
