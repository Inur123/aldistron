import { RegencyDto } from '../models/regency.dto';
import { Regency } from '../models/regency.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class RegencyMapper {
  static toModel(dto: RegencyDto): Regency {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: RegencyDto[]): Regency[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Regency): RegencyDto {
    return ModelToDtoMapper.toDto(model);
  }
}
