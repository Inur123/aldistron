import { GudangDto } from '../models/gudang.dto';
import { Gudang } from '../models/gudang.model';

export class ModelToDtoMapper {
  static toDto(model: Gudang): GudangDto {
    return {
      id: model.id,
      id_aoldatabase: model.idAoldatabase,
      id_aoldb: model.idAoldb,
      id_aolware: model.idAolware,
      nama_gudang: model.namaGudang,
      keterangan_gudang: model.keteranganGudang,
      location_id_aol: model.locationIdAol,
      suspended_aol: model.suspendedAol,
      default_warehouse_aol: model.defaultWarehouseAol,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString()
    };
  }
}
