import { HargaPromoProdukDto } from '../models/harga-promo-produk.dto';
import { HargaPromoProduk } from '../models/harga-promo-produk.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HargaPromoProdukMapper {
  static toModel(dto: HargaPromoProdukDto): HargaPromoProduk {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HargaPromoProdukDto[]): HargaPromoProduk[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HargaPromoProduk): HargaPromoProdukDto {
    return ModelToDtoMapper.toDto(model);
  }
}
