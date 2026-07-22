import { HargaPromoProdukDto } from '../models/harga-promo-produk.dto';
import { HargaPromoProduk } from '../models/harga-promo-produk.model';

export class ModelToDtoMapper {
  static toDto(model: HargaPromoProduk): HargaPromoProdukDto {
    return model as unknown as HargaPromoProdukDto;
  }
}
