import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Vendor } from '../../vendor/models/vendor.model';



export interface ProdukBrand {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idVendor: number;
  namaBrand: string;
  keteranganBrand: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  // Relasi
  aoldatabase?: AolDatabase;
  vendor?: Vendor;
}
