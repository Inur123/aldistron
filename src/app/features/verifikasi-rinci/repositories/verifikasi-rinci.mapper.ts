import { VerifikasiRinciDto } from '../models/verifikasi-rinci.dto';
import { VerifikasiRinci } from '../models/verifikasi-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class VerifikasiRinciMapper {
  static toModel(dto: VerifikasiRinciDto): VerifikasiRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: VerifikasiRinciDto[]): VerifikasiRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: VerifikasiRinci): VerifikasiRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
