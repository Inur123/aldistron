import { HargaJualDto } from '../models/harga-jual.dto';
import { HargaJual } from '../models/harga-jual.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HargaJualMapper {
  static toModel(dto: HargaJualDto): HargaJual {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HargaJualDto[]): HargaJual[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HargaJual): HargaJualDto {
    return ModelToDtoMapper.toDto(model);
  }
}
