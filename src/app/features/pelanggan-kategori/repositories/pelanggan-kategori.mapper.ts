import { PelangganKategoriDto } from '../models/pelanggan-kategori.dto';
import { PelangganKategori } from '../models/pelanggan-kategori.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class PelangganKategoriMapper {
  static toModel(dto: PelangganKategoriDto): PelangganKategori {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: PelangganKategoriDto[]): PelangganKategori[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: PelangganKategori): PelangganKategoriDto {
    return ModelToDtoMapper.toDto(model);
  }
}
