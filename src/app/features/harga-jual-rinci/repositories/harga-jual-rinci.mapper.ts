import { HargaJualRinciDto } from '../models/harga-jual-rinci.dto';
import { HargaJualRinci } from '../models/harga-jual-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HargaJualRinciMapper {
  static toModel(dto: HargaJualRinciDto): HargaJualRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HargaJualRinciDto[]): HargaJualRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HargaJualRinci): HargaJualRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
