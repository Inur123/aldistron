import { KunjunganTagihRinciDto } from '../models/kunjungan-tagih-rinci.dto';
import { KunjunganTagihRinci } from '../models/kunjungan-tagih-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class KunjunganTagihRinciMapper {
  static toModel(dto: KunjunganTagihRinciDto): KunjunganTagihRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: KunjunganTagihRinciDto[]): KunjunganTagihRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: KunjunganTagihRinci): KunjunganTagihRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
