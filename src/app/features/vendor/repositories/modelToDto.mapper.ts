import { VendorDto } from '../models/vendor.dto';
import { Vendor } from '../models/vendor.model';

export class ModelToDtoMapper {
  static toDto(model: Vendor): VendorDto {
    return {
      id: model.id,
      id_aoldatabase: model.idAoldatabase,
      id_aoldb: model.idAoldb,
      id_cabang: model.idCabang,
      id_aolven: model.idAolven,
      id_jangkapiutang: model.idJangkapiutang,
      id_vendorkategori: model.idVendorkategori,
      nomor_vendor: model.nomorVendor,
      nama_vendor: model.namaVendor,
      keterangan_vendor: model.keteranganVendor,
      log_aolcat_id: model.logAolcatId,
      log_aolbranch_id: model.logAolbranchId,
      log_aolterm_id: model.logAoltermId,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString(),
      deleted_at: model.deletedAt ? model.deletedAt.toISOString() : null
    };
  }
}
