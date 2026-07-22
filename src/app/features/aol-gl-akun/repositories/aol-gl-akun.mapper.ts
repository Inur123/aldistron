import { AolGlAkunDto } from '../models/aol-gl-akun.dto';
import { AolGlAkun } from '../models/aol-gl-akun.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class AolGlAkunMapper {
  static toModel(dto: AolGlAkunDto): AolGlAkun {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: AolGlAkunDto[]): AolGlAkun[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: AolGlAkun): AolGlAkunDto {
    return ModelToDtoMapper.toDto(model);
  }
}
