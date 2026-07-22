import { UserdataDto } from '../models/userdata.dto';
import { Userdata } from '../models/userdata.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class UserdataMapper {
  static toModel(dto: UserdataDto): Userdata {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: UserdataDto[]): Userdata[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Userdata): UserdataDto {
    return ModelToDtoMapper.toDto(model);
  }
}
