import { KunjunganTagih } from '../../kunjungan-tagih/models/kunjungan-tagih.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface KunjunganTagihNoRute {
  id: number;
  idKunjungantagih: number | null;
  nomorPenagihan: string;
  kodeKunjungan: string;
  idUserdata: number | null;
  idPelanggan: number | null;
  hariKunjungantagih: string;
  tanggalJatuhtempo: Date;
  idAolinv: number | null;
  idAolcust: number | null;
  nomorInvoice: string;
  nilaiPiutang: number | null;
  pembayaranTunai: number | null;
  pembayaranTransfer: number | null;
  pembayaranCekgiro: number | null;
  nomorCekgiro: string;
  bankCekgiro: string;
  tanggalCekgiro: Date;
  statusPenagihan: number | null;
  kodePostingPembayaran: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  kunjungantagih?: KunjunganTagih; // belongsTo
  pelanggan?: Pelanggan;           // belongsTo
}
