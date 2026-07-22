import { VendorKategoriDto } from '../models/vendor-kategori.dto';
import { VendorKategori } from '../models/vendor-kategori.model';

export class ModelToDtoMapper {
  static toDto(model: VendorKategori): VendorKategoriDto {
    return {
      id: model.id,
      id_aoldatabase: model.idAoldatabase,
      id_aoldb: model.idAoldb,
      id_aolvencat: model.idAolvencat,
      nama_kategori: model.namaKategori,
      keterangan_kategori: model.keteranganKategori,
      parent_id: model.parentId,
      haschild: model.haschild,
      log_aolcat_id: model.logAolcatId,
      connection_aol: model.connectionAol,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString(),
      deleted_at: model.deletedAt ? model.deletedAt.toISOString() : null
    };
  }
}
