import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface AolTax {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idAoltax: number;
  taxPurchaseId: number;
  taxSalesId: number;
  namaTax: string;
  nilaiTax: number;
  keteranganTax: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
}
