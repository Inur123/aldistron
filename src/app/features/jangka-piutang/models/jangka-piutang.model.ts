import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface JangkaPiutang {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idAolterm: string;
  namaJangkapiutang: string;
  hariJangkapiutang: number;
  suspendedAol: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi Modular ──────────────────────────────────────────
  aoldatabase?: AolDatabase;            // belongsTo
}
