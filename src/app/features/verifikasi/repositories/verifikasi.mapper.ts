import { VerifikasiDto } from '../models/verifikasi.dto';
import { Verifikasi } from '../models/verifikasi.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class VerifikasiMapper {
  static toModel(dto: VerifikasiDto): Verifikasi {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: VerifikasiDto[]): Verifikasi[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Verifikasi): VerifikasiDto {
    return ModelToDtoMapper.toDto(model);
  }
}
