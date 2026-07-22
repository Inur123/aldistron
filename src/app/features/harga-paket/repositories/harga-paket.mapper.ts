import { HargaPaketDto } from '../models/harga-paket.dto';
import { HargaPaket } from '../models/harga-paket.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HargaPaketMapper {
  static toModel(dto: HargaPaketDto): HargaPaket {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HargaPaketDto[]): HargaPaket[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HargaPaket): HargaPaketDto {
    return ModelToDtoMapper.toDto(model);
  }
}
