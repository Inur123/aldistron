import { Historystok } from '../../historystok/models/historystok.model';

export interface HistorystokRinci {
  id: number;
  idHistorystok: number;
  idProduk: number;
  namaProduk: string;
  qtyProduk: number;
  idUnit: number;
  nomorProduk: string;
  namaUnit: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  historystok?: Historystok; // belongsTo
}
