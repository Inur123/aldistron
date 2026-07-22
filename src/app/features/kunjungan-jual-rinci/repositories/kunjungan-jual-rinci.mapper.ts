import { KunjunganJualRinciDto } from '../models/kunjungan-jual-rinci.dto';
import { KunjunganJualRinci } from '../models/kunjungan-jual-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class KunjunganJualRinciMapper {
  static toModel(dto: KunjunganJualRinciDto): KunjunganJualRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: KunjunganJualRinciDto[]): KunjunganJualRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: KunjunganJualRinci): KunjunganJualRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
