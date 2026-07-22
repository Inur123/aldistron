import { Userdata } from '../../userdata/models/userdata.model';

export interface Useradmin {
  id: number;
  idUserdata: number;
  nama: string;
  username: string;
  password?: string;
  level: string;
  divisi: string;
  isAdministrator: boolean;
  namaAdministrator: string;
  emailAdministrator: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  userdata?: Userdata; // belongsTo
}
