import { KunjunganDto } from '../models/kunjungan.dto';
import { Kunjungan } from '../models/kunjungan.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class KunjunganMapper {
  static toModel(dto: KunjunganDto): Kunjungan {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: KunjunganDto[]): Kunjungan[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Kunjungan): KunjunganDto {
    return ModelToDtoMapper.toDto(model);
  }
}
