import { PelangganPoinDto } from '../models/pelanggan-poin.dto';
import { PelangganPoin } from '../models/pelanggan-poin.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class PelangganPoinMapper {
  static toModel(dto: PelangganPoinDto): PelangganPoin {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: PelangganPoinDto[]): PelangganPoin[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: PelangganPoin): PelangganPoinDto {
    return ModelToDtoMapper.toDto(model);
  }
}
