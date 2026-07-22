import { JangkaPiutangDto } from '../models/jangka-piutang.dto';
import { JangkaPiutang } from '../models/jangka-piutang.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class JangkaPiutangMapper {
  static toModel(dto: JangkaPiutangDto): JangkaPiutang {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: JangkaPiutangDto[]): JangkaPiutang[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: JangkaPiutang): JangkaPiutangDto {
    return ModelToDtoMapper.toDto(model);
  }
}
