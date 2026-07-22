import { RuteKunjung } from '../../rute-kunjung/models/rute-kunjung.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface RuteKunjungRinci {
  id: number;
  idRutekunjung: number;
  idPelanggan: number;
  idAolcust: number;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  rutekunjung?: RuteKunjung; // belongsTo
  pelanggan?: Pelanggan;     // belongsTo
}
