import { HargaMomenRinciDto } from '../models/harga-momen-rinci.dto';
import { HargaMomenRinci } from '../models/harga-momen-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HargaMomenRinciMapper {
  static toModel(dto: HargaMomenRinciDto): HargaMomenRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HargaMomenRinciDto[]): HargaMomenRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HargaMomenRinci): HargaMomenRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
