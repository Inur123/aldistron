import { KeycodeDto } from '../models/keycode.dto';
import { Keycode } from '../models/keycode.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class KeycodeMapper {
  static toModel(dto: KeycodeDto): Keycode {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: KeycodeDto[]): Keycode[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Keycode): KeycodeDto {
    return ModelToDtoMapper.toDto(model);
  }
}
