import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Product } from '../../product/models/product.model';


export interface ProdukKategori {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idAolitemcat: number;
  namaKategori: string;
  keteranganKategori: string;
  parentId: number;
  haschild: boolean;
  logAolcatId: number;
  connectionAol: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  // Relasi
  aoldatabase?: AolDatabase;
  produks?: Product[];
}
