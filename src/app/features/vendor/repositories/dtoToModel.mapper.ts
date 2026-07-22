import { VendorDto } from '../models/vendor.dto';
import { Vendor } from '../models/vendor.model';

export class DtoToModelMapper {
  static toModel(dto: VendorDto): Vendor {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idCabang: dto.id_cabang,
      idAolven: dto.id_aolven,
      idJangkapiutang: dto.id_jangkapiutang,
      idVendorkategori: dto.id_vendorkategori,
      nomorVendor: dto.nomor_vendor,
      namaVendor: dto.nama_vendor,
      keteranganVendor: dto.keterangan_vendor,
      logAolcatId: dto.log_aolcat_id,
      logAolbranchId: dto.log_aolbranch_id,
      logAoltermId: dto.log_aolterm_id,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined,
      deletedAt: dto.deleted_at ? new Date(dto.deleted_at) : null
    };
  }

  static toModelList(dtos: VendorDto[]): Vendor[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
