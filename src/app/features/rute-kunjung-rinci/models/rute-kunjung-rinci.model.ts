import { RuteKunjung } from '../../rute-kunjung/models/rute-kunjung.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface RuteKunjungRinci {
  id: number;
  idRutekunjung: number | null;
  idPelanggan: number | null;
  idAolcust: number | null;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  rutekunjung?: RuteKunjung; // belongsTo
  pelanggan?: Pelanggan;     // belongsTo
}
