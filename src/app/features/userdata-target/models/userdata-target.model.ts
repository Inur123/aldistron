import { Userdata } from '../../userdata/models/userdata.model';
import { UserdataTargetRinci } from '../../userdata-target-rinci/models/userdata-target-rinci.model';

export interface UserdataTarget {
  id: number;
  idUserdata: number | null;
  awalTarget: Date;
  akhirTarget: Date;
  nilaiTargetJual: number | null;
  nilaiTargetTagih: number | null;
  nilaiTargetKirim: number | null;
  hasilTargetJual: number | null;
  hasilTargetTagih: number | null;
  hasilTargetKirim: number | null;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  userdata?: Userdata;                            // belongsTo
  userdatatargetrincis?: UserdataTargetRinci[]; // hasMany
}
