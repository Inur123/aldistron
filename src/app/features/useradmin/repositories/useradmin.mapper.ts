import { UseradminDto } from '../models/useradmin.dto';
import { Useradmin } from '../models/useradmin.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class UseradminMapper {
  static toModel(dto: UseradminDto): Useradmin {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: UseradminDto[]): Useradmin[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Useradmin): UseradminDto {
    return ModelToDtoMapper.toDto(model);
  }
}
