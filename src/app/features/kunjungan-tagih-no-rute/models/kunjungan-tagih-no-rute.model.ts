import { KunjunganTagih } from '../../kunjungan-tagih/models/kunjungan-tagih.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface KunjunganTagihNoRute {
  id: number;
  idKunjungantagih: number;
  nomorPenagihan: string;
  kodeKunjungan: string;
  idUserdata: number;
  idPelanggan: number;
  hariKunjungantagih: string;
  tanggalJatuhtempo: Date;
  idAolinv: number;
  idAolcust: number;
  nomorInvoice: string;
  nilaiPiutang: number;
  pembayaranTunai: number;
  pembayaranTransfer: number;
  pembayaranCekgiro: number;
  nomorCekgiro: string;
  bankCekgiro: string;
  tanggalCekgiro: Date;
  statusPenagihan: number;
  kodePostingPembayaran: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  kunjungantagih?: KunjunganTagih; // belongsTo
  pelanggan?: Pelanggan;           // belongsTo
}
