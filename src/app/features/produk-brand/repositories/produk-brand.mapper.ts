import { ProdukBrandDto } from '../models/produk-brand.dto';
import { ProdukBrand } from '../models/produk-brand.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class ProdukBrandMapper {
  static toModel(dto: ProdukBrandDto): ProdukBrand {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: ProdukBrandDto[]): ProdukBrand[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: ProdukBrand): ProdukBrandDto {
    return ModelToDtoMapper.toDto(model);
  }
}
