import { VendorRinciDto } from '../models/vendor-rinci.dto';
import { VendorRinci } from '../models/vendor-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: VendorRinci): VendorRinciDto {
    return {
      id: model.id,
      id_vendor: model.idVendor,
      nama_vendor: model.namaVendor,
      kontak_vendor: model.kontakVendor,
      alamat_gudang: model.alamatGudang,
      desa_vendor: model.desaVendor,
      kecamatan_vendor: model.kecamatanVendor,
      kota_vendor: model.kotaVendor,
      propinsi_vendor: model.propinsiVendor,
      negara_vendor: model.negaraVendor,
      latlong_vendor: model.latlongVendor,
      alamat_bayar_vendor: model.alamatBayarVendor,
      telp_vendor: model.telpVendor,
      handphone_vendor: model.handphoneVendor,
      email_vendor: model.emailVendor,
      nik_vendor: model.nikVendor,
      npwp_vendor: model.npwpVendor,
      keterangan_vendor: model.keteranganVendor,
      infokhusus_vendor: model.infokhususVendor,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString()
    };
  }
}
