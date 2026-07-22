import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface JangkaPiutang {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idAolterm: string;
  namaJangkapiutang: string;
  hariJangkapiutang: number | null;
  suspendedAol: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi Modular ──────────────────────────────────────────
  aoldatabase?: AolDatabase;            // belongsTo
}
