import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Vendor } from '../../vendor/models/vendor.model';

export interface VendorKategori {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idAolvencat: number | null;
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
  vendors?: Vendor[];
}
