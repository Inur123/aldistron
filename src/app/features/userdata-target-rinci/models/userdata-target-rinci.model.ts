import { UserdataTarget } from '../../userdata-target/models/userdata-target.model';
import { Userdata } from '../../userdata/models/userdata.model';
import { Product } from '../../product/models/product.model';
import { Unit } from '../../unit/models/unit.model';

export interface UserdataTargetRinci {
  id: number;
  idUserdatatarget: number;
  idUserdata: number;
  jenisTarget: string;
  idProdukTarget: number;
  idUnitProdukTarget: number;
  nilaiProdukTarget: number;
  nilaiNooTarget: number;
  nilaiEcTarget: number;
  nilaiJatemTarget: number;
  nilaiKerjaTarget: number;
  hasilProdukTarget: number;
  hasilNooTarget: number;
  hasilEcTarget: number;
  hasilJatemTarget: number;
  hasilKerjaTarget: number;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  userdatatarget?: UserdataTarget; // belongsTo
  userdata?: Userdata;             // belongsTo
  produk?: Product;                // belongsTo
  unit?: Unit;                     // belongsTo
}
