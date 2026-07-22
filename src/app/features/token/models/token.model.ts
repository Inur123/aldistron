import { Userdata } from '../../userdata/models/userdata.model';

export interface Token {
  id: number;
  tgl: Date;
  userdata: number;
  token: string;
  apptoken: string;
  reftoken: string;
  lastAccess: Date;
  status: number;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  user?: Userdata; // belongsTo
}
