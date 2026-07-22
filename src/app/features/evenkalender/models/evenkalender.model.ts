import { EvenkalenderRinci } from "../../evenkalender-rinci/models/evenkalender-rinci.model";


export interface Evenkalender {
  id: number;
  namaEven: string;
  keteranganEven: string;
  mulaiEven: Date;
  selesaiEven: Date;
  arrayData: string;
  statusEven: boolean;
  creator: number;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  evenkalenderrincis?: EvenkalenderRinci[]; // hasMany
}
