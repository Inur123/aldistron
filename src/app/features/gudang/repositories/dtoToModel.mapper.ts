import { GudangDto } from '../models/gudang.dto';
import { Gudang } from '../models/gudang.model';

export class DtoToModelMapper {
  static toModel(dto: GudangDto): Gudang {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idAolware: dto.id_aolware,
      namaGudang: dto.nama_gudang,
      keteranganGudang: dto.keterangan_gudang,
      locationIdAol: dto.location_id_aol,
      suspendedAol: dto.suspended_aol,
      defaultWarehouseAol: dto.default_warehouse_aol,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: GudangDto[]): Gudang[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
