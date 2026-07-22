import { KlaimBiayaRinciDto } from '../models/klaim-biaya-rinci.dto';
import { KlaimBiayaRinci } from '../models/klaim-biaya-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class KlaimBiayaRinciMapper {
  static toModel(dto: KlaimBiayaRinciDto): KlaimBiayaRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: KlaimBiayaRinciDto[]): KlaimBiayaRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: KlaimBiayaRinci): KlaimBiayaRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
