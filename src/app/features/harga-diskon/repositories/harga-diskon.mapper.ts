import { HargaDiskonDto } from '../models/harga-diskon.dto';
import { HargaDiskon } from '../models/harga-diskon.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HargaDiskonMapper {
  static toModel(dto: HargaDiskonDto): HargaDiskon {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HargaDiskonDto[]): HargaDiskon[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HargaDiskon): HargaDiskonDto {
    return ModelToDtoMapper.toDto(model);
  }
}
