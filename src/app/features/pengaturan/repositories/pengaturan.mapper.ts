import { PengaturanDto } from '../models/pengaturan.dto';
import { Pengaturan } from '../models/pengaturan.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class PengaturanMapper {
  static toModel(dto: PengaturanDto): Pengaturan {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: PengaturanDto[]): Pengaturan[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Pengaturan): PengaturanDto {
    return ModelToDtoMapper.toDto(model);
  }
}
