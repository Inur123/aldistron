import { Pengiriman } from '../../pengiriman/models/pengiriman.model';
import { KunjunganJual } from '../../kunjungan-jual/models/kunjungan-jual.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface PengirimanRinci {
  id: number;
  idPengiriman: number | null;
  idKunjunganjual: number | null;
  nomorSalesorder: string;
  idPelanggan: number | null;
  namaPelanggan: string;
  nilaiSalesorder: number | null;
  jsonbBarangTerkirim: any;
  keterangan: string;
  statusKirim: string;
  selesaiKirim: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  pengiriman?: Pengiriman;      // belongsTo
  kunjunganjual?: KunjunganJual; // belongsTo
  pelanggan?: Pelanggan;        // belongsTo
}
