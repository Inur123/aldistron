import { Evenkalender } from '../../evenkalender/models/evenkalender.model';

export interface EvenkalenderRinci {
  id: number;
  idEvenkalender: number | null;
  keterangan: string;
  desaEven: string;
  kecamatanEven: string;
  kotaEven: string;
  propinsiEven: string;
  kodeDesa: string;
  latlongEven: string;
  imageEven: string;
  hasilEven: string;
  arrayImage: string[];
  arrayFeedback: string[];
  arrayUser: string[];
  arrayUserid: string[];
  arrayProduk: string[];
  arrayUnit: string[];
  arrayVendor: string[];
  arrayDate: Date[];
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  evenkalender?: Evenkalender; // belongsTo
}
