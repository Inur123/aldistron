import { Pengiriman } from '../../pengiriman/models/pengiriman.model';
import { KunjunganJual } from '../../kunjungan-jual/models/kunjungan-jual.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface PengirimanRinci {
  id: number;
  idPengiriman: number;
  idKunjunganjual: number;
  nomorSalesorder: string;
  idPelanggan: number;
  namaPelanggan: string;
  nilaiSalesorder: number;
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
