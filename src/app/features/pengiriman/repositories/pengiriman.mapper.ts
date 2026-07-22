import { PengirimanDto } from '../models/pengiriman.dto';
import { Pengiriman } from '../models/pengiriman.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class PengirimanMapper {
  static toModel(dto: PengirimanDto): Pengiriman {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: PengirimanDto[]): Pengiriman[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Pengiriman): PengirimanDto {
    return ModelToDtoMapper.toDto(model);
  }
}
