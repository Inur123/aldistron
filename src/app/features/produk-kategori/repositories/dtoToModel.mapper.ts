import { ProdukKategoriDto } from '../models/produk-kategori.dto';
import { ProdukKategori } from '../models/produk-kategori.model';

export class DtoToModelMapper {
  static toModel(dto: ProdukKategoriDto): ProdukKategori {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idAolitemcat: dto.id_aolitemcat,
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

  static toModelList(dtos: ProdukKategoriDto[]): ProdukKategori[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
