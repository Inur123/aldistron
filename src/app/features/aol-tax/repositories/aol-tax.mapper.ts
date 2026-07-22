import { AolTaxDto } from '../models/aol-tax.dto';
import { AolTax } from '../models/aol-tax.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class AolTaxMapper {
  static toModel(dto: AolTaxDto): AolTax {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: AolTaxDto[]): AolTax[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: AolTax): AolTaxDto {
    return ModelToDtoMapper.toDto(model);
  }
}
