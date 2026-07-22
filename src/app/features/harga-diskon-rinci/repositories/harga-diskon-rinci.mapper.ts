import { HargaDiskonRinciDto } from '../models/harga-diskon-rinci.dto';
import { HargaDiskonRinci } from '../models/harga-diskon-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HargaDiskonRinciMapper {
  static toModel(dto: HargaDiskonRinciDto): HargaDiskonRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HargaDiskonRinciDto[]): HargaDiskonRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HargaDiskonRinci): HargaDiskonRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
