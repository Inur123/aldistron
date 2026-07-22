import { VendorRinciDto } from '../models/vendor-rinci.dto';
import { VendorRinci } from '../models/vendor-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: VendorRinciDto): VendorRinci {
    return {
      id: dto.id,
      idVendor: dto.id_vendor,
      namaVendor: dto.nama_vendor,
      kontakVendor: dto.kontak_vendor,
      alamatGudang: dto.alamat_gudang,
      desaVendor: dto.desa_vendor,
      kecamatanVendor: dto.kecamatan_vendor,
      kotaVendor: dto.kota_vendor,
      propinsiVendor: dto.propinsi_vendor,
      negaraVendor: dto.negara_vendor,
      latlongVendor: dto.latlong_vendor,
      alamatBayarVendor: dto.alamat_bayar_vendor,
      telpVendor: dto.telp_vendor,
      handphoneVendor: dto.handphone_vendor,
      emailVendor: dto.email_vendor,
      nikVendor: dto.nik_vendor,
      npwpVendor: dto.npwp_vendor,
      keteranganVendor: dto.keterangan_vendor,
      infokhususVendor: dto.infokhusus_vendor,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: VendorRinciDto[]): VendorRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
