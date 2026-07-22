import { AbsenMasukDto } from '../models/absen-masuk.dto';
import { AbsenMasuk } from '../models/absen-masuk.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class AbsenMasukMapper {
  static toModel(dto: AbsenMasukDto): AbsenMasuk {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: AbsenMasukDto[]): AbsenMasuk[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: AbsenMasuk): AbsenMasukDto {
    return ModelToDtoMapper.toDto(model);
  }
}
