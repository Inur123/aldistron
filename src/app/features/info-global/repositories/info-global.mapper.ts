import { InfoGlobalDto } from '../models/info-global.dto';
import { InfoGlobal } from '../models/info-global.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class InfoGlobalMapper {
  static toModel(dto: InfoGlobalDto): InfoGlobal {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: InfoGlobalDto[]): InfoGlobal[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: InfoGlobal): InfoGlobalDto {
    return ModelToDtoMapper.toDto(model);
  }
}
