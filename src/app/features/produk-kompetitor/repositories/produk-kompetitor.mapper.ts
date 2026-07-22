import { ProdukKompetitorDto } from '../models/produk-kompetitor.dto';
import { ProdukKompetitor } from '../models/produk-kompetitor.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class ProdukKompetitorMapper {
  static toModel(dto: ProdukKompetitorDto): ProdukKompetitor {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: ProdukKompetitorDto[]): ProdukKompetitor[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: ProdukKompetitor): ProdukKompetitorDto {
    return ModelToDtoMapper.toDto(model);
  }
}
