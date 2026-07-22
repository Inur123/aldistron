import { PiutangMomenDto } from '../models/piutang-momen.dto';
import { PiutangMomen } from '../models/piutang-momen.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class PiutangMomenMapper {
  static toModel(dto: PiutangMomenDto): PiutangMomen {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: PiutangMomenDto[]): PiutangMomen[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: PiutangMomen): PiutangMomenDto {
    return ModelToDtoMapper.toDto(model);
  }
}
