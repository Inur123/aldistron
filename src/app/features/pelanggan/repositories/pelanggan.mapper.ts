import { PelangganDto } from '../models/pelanggan.dto';
import { Pelanggan } from '../models/pelanggan.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class PelangganMapper {
  static toModel(dto: PelangganDto): Pelanggan {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: PelangganDto[]): Pelanggan[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Pelanggan): PelangganDto {
    return ModelToDtoMapper.toDto(model);
  }
}
