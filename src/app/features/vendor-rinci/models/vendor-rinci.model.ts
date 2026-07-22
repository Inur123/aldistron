import { Vendor } from '../../vendor/models/vendor.model';

export interface VendorRinci {
  id: number;
  idVendor: number;
  namaVendor: string;
  kontakVendor: string;
  alamatGudang: string;
  desaVendor: number;
  kecamatanVendor: number;
  kotaVendor: number;
  propinsiVendor: number;
  negaraVendor: number;
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
