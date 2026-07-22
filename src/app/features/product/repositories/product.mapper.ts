import { ProductDto } from '../models/product.dto';
import { Product } from '../models/product.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class ProductMapper {
  static toModel(dto: ProductDto): Product {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: ProductDto[]): Product[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Product): ProductDto {
    return ModelToDtoMapper.toDto(model);
  }
}
