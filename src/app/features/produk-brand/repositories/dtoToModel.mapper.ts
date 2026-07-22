import { ProdukBrandDto } from '../models/produk-brand.dto';
import { ProdukBrand } from '../models/produk-brand.model';

export class DtoToModelMapper {
  static toModel(dto: ProdukBrandDto): ProdukBrand {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idVendor: dto.id_vendor,
      namaBrand: dto.nama_brand,
      keteranganBrand: dto.keterangan_brand,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined,
      deletedAt: dto.deleted_at ? new Date(dto.deleted_at) : null
    };
  }

  static toModelList(dtos: ProdukBrandDto[]): ProdukBrand[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
