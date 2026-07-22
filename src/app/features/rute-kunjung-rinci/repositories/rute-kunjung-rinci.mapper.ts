import { RuteKunjungRinciDto } from '../models/rute-kunjung-rinci.dto';
import { RuteKunjungRinci } from '../models/rute-kunjung-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class RuteKunjungRinciMapper {
  static toModel(dto: RuteKunjungRinciDto): RuteKunjungRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: RuteKunjungRinciDto[]): RuteKunjungRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: RuteKunjungRinci): RuteKunjungRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
