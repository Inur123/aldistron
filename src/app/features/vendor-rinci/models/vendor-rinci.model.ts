import { Vendor } from '../../vendor/models/vendor.model';

export interface VendorRinci {
  id: number;
  idVendor: number | null;
  namaVendor: string;
  kontakVendor: string;
  alamatGudang: string;
  desaVendor: number | null;
  kecamatanVendor: number | null;
  kotaVendor: number | null;
  propinsiVendor: number | null;
  negaraVendor: number | null;
  latlongVendor: string;
  alamatBayarVendor: string;
  telpVendor: string;
  handphoneVendor: string;
  emailVendor: string;
  nikVendor: string;
  npwpVendor: string;
  keteranganVendor: string;
  infokhususVendor: string;
  createdAt?: Date;
  updatedAt?: Date;

  // Relasi
  vendor?: Vendor;
}
