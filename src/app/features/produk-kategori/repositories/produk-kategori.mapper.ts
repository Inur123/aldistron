import { ProdukKategoriDto } from '../models/produk-kategori.dto';
import { ProdukKategori } from '../models/produk-kategori.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class ProdukKategoriMapper {
  static toModel(dto: ProdukKategoriDto): ProdukKategori {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: ProdukKategoriDto[]): ProdukKategori[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: ProdukKategori): ProdukKategoriDto {
    return ModelToDtoMapper.toDto(model);
  }
}
