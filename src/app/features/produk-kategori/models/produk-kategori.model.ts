import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Product } from '../../product/models/product.model';


export interface ProdukKategori {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idAolitemcat: number | null;
  namaKategori: string;
  keteranganKategori: string;
  parentId: number | null;
  haschild: boolean;
  logAolcatId: number | null;
  connectionAol: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  // Relasi
  aoldatabase?: AolDatabase;
  produks?: Product[];
}
