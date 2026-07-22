import { VendorKategoriDto } from '../models/vendor-kategori.dto';
import { VendorKategori } from '../models/vendor-kategori.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class VendorKategoriMapper {
  static toModel(dto: VendorKategoriDto): VendorKategori {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: VendorKategoriDto[]): VendorKategori[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: VendorKategori): VendorKategoriDto {
    return ModelToDtoMapper.toDto(model);
  }
}
