import { HargaDiskonProdukDto } from '../models/harga-diskon-produk.dto';
import { HargaDiskonProduk } from '../models/harga-diskon-produk.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HargaDiskonProdukMapper {
  static toModel(dto: HargaDiskonProdukDto): HargaDiskonProduk {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HargaDiskonProdukDto[]): HargaDiskonProduk[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HargaDiskonProduk): HargaDiskonProdukDto {
    return ModelToDtoMapper.toDto(model);
  }
}
