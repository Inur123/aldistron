import { PengirimanRinciDto } from '../models/pengiriman-rinci.dto';
import { PengirimanRinci } from '../models/pengiriman-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class PengirimanRinciMapper {
  static toModel(dto: PengirimanRinciDto): PengirimanRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: PengirimanRinciDto[]): PengirimanRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: PengirimanRinci): PengirimanRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
