import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface Gudang {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idAolware: number;
  namaGudang: string;
  keteranganGudang: string;
  locationIdAol: number;
  suspendedAol: boolean;
  defaultWarehouseAol: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
}
