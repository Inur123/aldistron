import { PiutangAktualDto } from '../models/piutang-aktual.dto';
import { PiutangAktual } from '../models/piutang-aktual.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class PiutangAktualMapper {
  static toModel(dto: PiutangAktualDto): PiutangAktual {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: PiutangAktualDto[]): PiutangAktual[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: PiutangAktual): PiutangAktualDto {
    return ModelToDtoMapper.toDto(model);
  }
}
