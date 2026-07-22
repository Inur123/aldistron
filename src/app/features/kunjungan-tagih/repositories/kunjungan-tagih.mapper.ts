import { KunjunganTagihDto } from '../models/kunjungan-tagih.dto';
import { KunjunganTagih } from '../models/kunjungan-tagih.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class KunjunganTagihMapper {
  static toModel(dto: KunjunganTagihDto): KunjunganTagih {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: KunjunganTagihDto[]): KunjunganTagih[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: KunjunganTagih): KunjunganTagihDto {
    return ModelToDtoMapper.toDto(model);
  }
}
