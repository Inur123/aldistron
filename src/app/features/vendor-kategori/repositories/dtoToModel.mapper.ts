import { VendorKategoriDto } from '../models/vendor-kategori.dto';
import { VendorKategori } from '../models/vendor-kategori.model';

export class DtoToModelMapper {
  static toModel(dto: VendorKategoriDto): VendorKategori {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idAolvencat: dto.id_aolvencat,
      namaKategori: dto.nama_kategori,
      keteranganKategori: dto.keterangan_kategori,
      parentId: dto.parent_id,
      haschild: dto.haschild,
      logAolcatId: dto.log_aolcat_id,
      connectionAol: dto.connection_aol,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined,
      deletedAt: dto.deleted_at ? new Date(dto.deleted_at) : null
    };
  }

  static toModelList(dtos: VendorKategoriDto[]): VendorKategori[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
