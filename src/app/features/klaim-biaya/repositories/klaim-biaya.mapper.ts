import { KlaimBiayaDto } from '../models/klaim-biaya.dto';
import { KlaimBiaya } from '../models/klaim-biaya.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class KlaimBiayaMapper {
  static toModel(dto: KlaimBiayaDto): KlaimBiaya {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: KlaimBiayaDto[]): KlaimBiaya[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: KlaimBiaya): KlaimBiayaDto {
    return ModelToDtoMapper.toDto(model);
  }
}
