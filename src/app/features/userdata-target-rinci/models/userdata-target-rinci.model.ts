import { UserdataTarget } from '../../userdata-target/models/userdata-target.model';
import { Userdata } from '../../userdata/models/userdata.model';
import { Product } from '../../product/models/product.model';
import { Unit } from '../../unit/models/unit.model';

export interface UserdataTargetRinci {
  id: number;
  idUserdatatarget: number | null;
  idUserdata: number | null;
  jenisTarget: string;
  idProdukTarget: number | null;
  idUnitProdukTarget: number | null;
  nilaiProdukTarget: number | null;
  nilaiNooTarget: number | null;
  nilaiEcTarget: number | null;
  nilaiJatemTarget: number | null;
  nilaiKerjaTarget: number | null;
  hasilProdukTarget: number | null;
  hasilNooTarget: number | null;
  hasilEcTarget: number | null;
  hasilJatemTarget: number | null;
  hasilKerjaTarget: number | null;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  userdatatarget?: UserdataTarget; // belongsTo
  userdata?: Userdata;             // belongsTo
  produk?: Product;                // belongsTo
  unit?: Unit;                     // belongsTo
}
