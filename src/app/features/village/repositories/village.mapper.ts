import { VillageDto } from '../models/village.dto';
import { Village } from '../models/village.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class VillageMapper {
  static toModel(dto: VillageDto): Village {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: VillageDto[]): Village[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Village): VillageDto {
    return ModelToDtoMapper.toDto(model);
  }
}
