import { AolSessionDto } from '../models/aol-session.dto';
import { AolSession } from '../models/aol-session.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class AolSessionMapper {
  static toModel(dto: AolSessionDto): AolSession {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: AolSessionDto[]): AolSession[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: AolSession): AolSessionDto {
    return ModelToDtoMapper.toDto(model);
  }
}
