import { CabangDto } from '../models/cabang.dto';
import { Cabang } from '../models/cabang.model';

export class DtoToModelMapper {
  static toModel(dto: CabangDto): Cabang {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idAolcab: dto.id_aolcab,
      namaCabang: dto.nama_cabang,
      alamatCabang: dto.alamat_cabang,
      telpCabang: dto.telp_cabang,
      handphoneCabang: dto.handphone_cabang,
      picCabang: dto.pic_cabang,
      defaultCabang: dto.default_cabang,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined,
      deletedAt: dto.deleted_at ? new Date(dto.deleted_at) : null
    };
  }

  static toModelList(dtos: CabangDto[]): Cabang[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
