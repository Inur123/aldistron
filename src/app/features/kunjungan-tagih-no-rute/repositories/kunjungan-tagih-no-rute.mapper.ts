import { KunjunganTagihNoRuteDto } from '../models/kunjungan-tagih-no-rute.dto';
import { KunjunganTagihNoRute } from '../models/kunjungan-tagih-no-rute.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class KunjunganTagihNoRuteMapper {
  static toModel(dto: KunjunganTagihNoRuteDto): KunjunganTagihNoRute {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: KunjunganTagihNoRuteDto[]): KunjunganTagihNoRute[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: KunjunganTagihNoRute): KunjunganTagihNoRuteDto {
    return ModelToDtoMapper.toDto(model);
  }
}
