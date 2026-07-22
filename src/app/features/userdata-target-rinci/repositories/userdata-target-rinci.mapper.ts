import { UserdataTargetRinciDto } from '../models/userdata-target-rinci.dto';
import { UserdataTargetRinci } from '../models/userdata-target-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class UserdataTargetRinciMapper {
  static toModel(dto: UserdataTargetRinciDto): UserdataTargetRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: UserdataTargetRinciDto[]): UserdataTargetRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: UserdataTargetRinci): UserdataTargetRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
