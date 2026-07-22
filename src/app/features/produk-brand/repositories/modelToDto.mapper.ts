import { ProdukBrandDto } from '../models/produk-brand.dto';
import { ProdukBrand } from '../models/produk-brand.model';

export class ModelToDtoMapper {
  static toDto(model: ProdukBrand): ProdukBrandDto {
    return {
      id: model.id,
      id_aoldatabase: model.idAoldatabase,
      id_aoldb: model.idAoldb,
      id_vendor: model.idVendor,
      nama_brand: model.namaBrand,
      keterangan_brand: model.keteranganBrand,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString(),
      deleted_at: model.deletedAt ? model.deletedAt.toISOString() : null
    };
  }
}
