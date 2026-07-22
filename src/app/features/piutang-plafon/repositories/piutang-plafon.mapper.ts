import { PiutangPlafonDto } from '../models/piutang-plafon.dto';
import { PiutangPlafon } from '../models/piutang-plafon.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class PiutangPlafonMapper {
  static toModel(dto: PiutangPlafonDto): PiutangPlafon {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: PiutangPlafonDto[]): PiutangPlafon[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: PiutangPlafon): PiutangPlafonDto {
    return ModelToDtoMapper.toDto(model);
  }
}
