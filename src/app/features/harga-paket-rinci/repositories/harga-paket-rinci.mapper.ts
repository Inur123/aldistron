import { HargaPaketRinciDto } from '../models/harga-paket-rinci.dto';
import { HargaPaketRinci } from '../models/harga-paket-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HargaPaketRinciMapper {
  static toModel(dto: HargaPaketRinciDto): HargaPaketRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HargaPaketRinciDto[]): HargaPaketRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HargaPaketRinci): HargaPaketRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
