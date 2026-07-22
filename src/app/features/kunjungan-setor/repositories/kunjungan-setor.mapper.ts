import { KunjunganSetorDto } from '../models/kunjungan-setor.dto';
import { KunjunganSetor } from '../models/kunjungan-setor.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class KunjunganSetorMapper {
  static toModel(dto: KunjunganSetorDto): KunjunganSetor {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: KunjunganSetorDto[]): KunjunganSetor[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: KunjunganSetor): KunjunganSetorDto {
    return ModelToDtoMapper.toDto(model);
  }
}
