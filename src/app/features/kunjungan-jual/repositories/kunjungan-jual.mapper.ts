import { KunjunganJualDto } from '../models/kunjungan-jual.dto';
import { KunjunganJual } from '../models/kunjungan-jual.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class KunjunganJualMapper {
  static toModel(dto: KunjunganJualDto): KunjunganJual {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: KunjunganJualDto[]): KunjunganJual[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: KunjunganJual): KunjunganJualDto {
    return ModelToDtoMapper.toDto(model);
  }
}
