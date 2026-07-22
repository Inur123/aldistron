import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';

export interface ProdukKompetitor {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  idUserdata: number | null;
  namaAdministrator: string;
  emailAdministrator: string;
  jenisProduk: string;
  namaProduk: string;
  produsenProduk: string;
  alamatProdusen: string;
  konversiProduk: string;
  barcodeProduk: string;
  gambarProduk: string;
  keteranganProduk: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi Modular ──────────────────────────────────────────
  aoldatabase?: AolDatabase;
  cabang?: Cabang;
}
