import { PelangganRequestDto } from '../models/pelanggan-request.dto';
import { PelangganRequest } from '../models/pelanggan-request.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class PelangganRequestMapper {
  static toModel(dto: PelangganRequestDto): PelangganRequest {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: PelangganRequestDto[]): PelangganRequest[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: PelangganRequest): PelangganRequestDto {
    return ModelToDtoMapper.toDto(model);
  }
}
