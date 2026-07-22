import { UserdataRinciDto } from '../models/userdata-rinci.dto';
import { UserdataRinci } from '../models/userdata-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class UserdataRinciMapper {
  static toModel(dto: UserdataRinciDto): UserdataRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: UserdataRinciDto[]): UserdataRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: UserdataRinci): UserdataRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
