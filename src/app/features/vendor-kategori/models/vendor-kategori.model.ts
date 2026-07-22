import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Vendor } from '../../vendor/models/vendor.model';

export interface VendorKategori {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idAolvencat: number;
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
  vendors?: Vendor[];
}
