import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface AolSession {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  dataversionAol: string;
  licenseendAol: Date;
  sessionAol: string;
  hostAol: string;
  adminAol: boolean;
  accessibleuntilAol: Date;
  trialAol: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
}
