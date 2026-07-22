import { PelangganRinciDto } from '../models/pelanggan-rinci.dto';
import { PelangganRinci } from '../models/pelanggan-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class PelangganRinciMapper {
  static toModel(dto: PelangganRinciDto): PelangganRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: PelangganRinciDto[]): PelangganRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: PelangganRinci): PelangganRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
