import { AolTokenDto } from '../models/aol-token.dto';
import { AolToken } from '../models/aol-token.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class AolTokenMapper {
  static toModel(dto: AolTokenDto): AolToken {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: AolTokenDto[]): AolToken[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: AolToken): AolTokenDto {
    return ModelToDtoMapper.toDto(model);
  }
}
