import { UserdataTargetDto } from '../models/userdata-target.dto';
import { UserdataTarget } from '../models/userdata-target.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class UserdataTargetMapper {
  static toModel(dto: UserdataTargetDto): UserdataTarget {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: UserdataTargetDto[]): UserdataTarget[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: UserdataTarget): UserdataTargetDto {
    return ModelToDtoMapper.toDto(model);
  }
}
