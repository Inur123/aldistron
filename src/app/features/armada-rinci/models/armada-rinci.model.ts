import { Armada } from '../../armada/models/armada.model';

export interface ArmadaRinci {
  id: number;
  idArmada: number | null;
  nostnkArmada: string;
  nobpkbArmada: string;
  tglPembelian: Date;
  serviceTerakhir: Date;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  armada?: Armada; // belongsTo
}
