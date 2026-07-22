import { Userdata } from '../../userdata/models/userdata.model';
import { UserdataTargetRinci } from '../../userdata-target-rinci/models/userdata-target-rinci.model';

export interface UserdataTarget {
  id: number;
  idUserdata: number;
  awalTarget: Date;
  akhirTarget: Date;
  nilaiTargetJual: number;
  nilaiTargetTagih: number;
  nilaiTargetKirim: number;
  hasilTargetJual: number;
  hasilTargetTagih: number;
  hasilTargetKirim: number;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  userdata?: Userdata;                            // belongsTo
  userdatatargetrincis?: UserdataTargetRinci[]; // hasMany
}
