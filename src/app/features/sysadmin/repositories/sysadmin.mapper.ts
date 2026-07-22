import { SysadminDto } from '../models/sysadmin.dto';
import { Sysadmin } from '../models/sysadmin.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class SysadminMapper {
  static toModel(dto: SysadminDto): Sysadmin {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: SysadminDto[]): Sysadmin[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Sysadmin): SysadminDto {
    return ModelToDtoMapper.toDto(model);
  }
}
