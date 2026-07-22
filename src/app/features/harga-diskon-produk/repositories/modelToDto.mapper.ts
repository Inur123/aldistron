import { HargaDiskonProdukDto } from '../models/harga-diskon-produk.dto';
import { HargaDiskonProduk } from '../models/harga-diskon-produk.model';

export class ModelToDtoMapper {
  static toDto(model: HargaDiskonProduk): HargaDiskonProdukDto {
    return model as unknown as HargaDiskonProdukDto;
  }
}
